import { Resend } from 'resend';

interface AttachmentPayload {
  filename: string;
  content: string; // base64 string
  contentType?: string;
  size?: number;
}

interface InquiryRequestBody {
  companyName: string;
  fullName: string;
  designation?: string;
  contactNumber?: string;
  emailAddress: string;
  productCategory: string;
  orderQuantity?: string;
  targetDeliveryDate?: string;
  productRequirement: string;
  additionalRequirements?: string;
  attachment?: AttachmentPayload | null;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} not allowed. Please use POST.`
    });
  }

  try {
    // Defensive body parsing (handles pre-parsed JSON, raw string, and raw stream chunks)
    let body: InquiryRequestBody = req.body;

    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (err) {
        return res.status(400).json({ success: false, error: 'Invalid JSON request payload.' });
      }
    } else if (!body && typeof req.on === 'function') {
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
      }
      const rawText = Buffer.concat(chunks).toString('utf-8');
      if (rawText) {
        try {
          body = JSON.parse(rawText);
        } catch (err) {
          return res.status(400).json({ success: false, error: 'Malformed JSON payload.' });
        }
      }
    }

    if (!body || typeof body !== 'object') {
      return res.status(400).json({ success: false, error: 'Request body must be a valid JSON object.' });
    }

    const {
      companyName,
      fullName,
      designation,
      contactNumber,
      emailAddress,
      productCategory,
      orderQuantity,
      targetDeliveryDate,
      productRequirement,
      additionalRequirements,
      attachment
    } = body;

    // 1. Validate required fields
    if (!companyName || !companyName.trim()) {
      return res.status(400).json({ success: false, error: 'Company Name is required.' });
    }
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, error: 'Full Name is required.' });
    }
    if (!emailAddress || !emailAddress.trim()) {
      return res.status(400).json({ success: false, error: 'Email Address is required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress.trim())) {
      return res.status(400).json({ success: false, error: 'Please provide a valid corporate email address.' });
    }
    if (!productRequirement || !productRequirement.trim()) {
      return res.status(400).json({ success: false, error: 'Product / Order Requirement is required.' });
    }

    // 2. Resolve Environment Variables & API Key
    const apiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'efanrahman32824@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'BELVORIS Website <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('EMAIL_API_KEY is not configured in environment variables.');
      return res.status(500).json({
        success: false,
        error:
          'Email service is not configured. Please set EMAIL_API_KEY (Resend API key) in your environment variables.'
      });
    }

    const resend = new Resend(apiKey);

    // 3. Process optional attachment
    const emailAttachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
    if (attachment && attachment.content && attachment.filename) {
      try {
        // Strip data URI prefix if present (e.g., "data:application/pdf;base64,...")
        const base64Clean = attachment.content.replace(/^data:[^;]+;base64,/, '');
        const fileBuffer = Buffer.from(base64Clean, 'base64');

        // Protect against serverless payload limits (4.5 MB max on Vercel)
        if (fileBuffer.length > 4.5 * 1024 * 1024) {
          return res.status(400).json({
            success: false,
            error:
              'Attached file exceeds the 4.5 MB serverless upload limit. Please attach a smaller file or email us directly at efanrahman32824@gmail.com.'
          });
        }

        emailAttachments.push({
          filename: attachment.filename,
          content: fileBuffer,
          ...(attachment.contentType ? { contentType: attachment.contentType } : {})
        });
      } catch (fileErr) {
        console.error('Error processing attachment buffer:', fileErr);
        return res.status(400).json({
          success: false,
          error: 'Failed to process file attachment. Please ensure the file is valid.'
        });
      }
    }

    // 4. Construct professional email layout
    const formattedDate = new Date().toUTCString();
    const subject = `New Buyer Inquiry: ${companyName} — BELVORIS Website`;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Buyer Inquiry — BELVORIS Website</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF9F5; margin: 0; padding: 24px; color: #18181B; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #E4E0D7; border-top: 4px solid #18181B; }
    .header { padding: 32px 32px 24px; border-bottom: 1px solid #EFECE6; }
    .brand { font-size: 20px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin: 0; color: #18181B; }
    .subtitle { font-size: 12px; color: #78716A; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 4px; }
    .body { padding: 32px; }
    .intro { font-size: 15px; line-height: 1.5; color: #4A4742; margin-bottom: 24px; }
    .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .table th, .table td { padding: 12px 14px; text-align: left; font-size: 14px; border-bottom: 1px solid #F0ECE4; }
    .table th { width: 35%; color: #78716A; font-weight: 600; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; background-color: #FAF9F5; vertical-align: top; }
    .table td { color: #18181B; vertical-align: top; }
    .notes-box { background-color: #F8F6F1; border-left: 3px solid #18181B; padding: 16px; margin: 20px 0; font-size: 14px; line-height: 1.6; color: #2C2B29; white-space: pre-wrap; }
    .attachment-badge { display: inline-block; padding: 6px 12px; background: #ECE8E0; color: #18181B; font-size: 12px; font-weight: 500; border-radius: 2px; }
    .footer { padding: 24px 32px; background-color: #F6F4EF; border-top: 1px solid #EFECE6; font-size: 12px; color: #78716A; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand">BELVORIS</div>
      <div class="subtitle">Apparel Buying House & Sourcing Partner · Dhaka, Bangladesh</div>
    </div>
    <div class="body">
      <p class="intro">
        A new buyer inquiry has been submitted through the <strong>BELVORIS Website</strong> contact form. Details are summarized below:
      </p>

      <table class="table">
        <tr>
          <th>Company Name</th>
          <td><strong>${escapeHtml(companyName)}</strong></td>
        </tr>
        <tr>
          <th>Contact Person</th>
          <td>${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <th>Designation / Title</th>
          <td>${escapeHtml(designation || 'Not specified')}</td>
        </tr>
        <tr>
          <th>Corporate Email</th>
          <td><a href="mailto:${escapeHtml(emailAddress)}" style="color: #18181B; font-weight: 600;">${escapeHtml(emailAddress)}</a></td>
        </tr>
        <tr>
          <th>Contact / WhatsApp</th>
          <td>${escapeHtml(contactNumber || 'Not specified')}</td>
        </tr>
        <tr>
          <th>Product Category</th>
          <td><strong>${escapeHtml(productCategory || 'General Apparel')}</strong></td>
        </tr>
        <tr>
          <th>Order Quantity</th>
          <td>${escapeHtml(orderQuantity || 'Flexible / Inquiry-based')}</td>
        </tr>
        <tr>
          <th>Target Delivery / Season</th>
          <td>${escapeHtml(targetDeliveryDate || 'Not specified')}</td>
        </tr>
        <tr>
          <th>Attached References</th>
          <td>
            ${
              attachment && attachment.filename
                ? `<span class="attachment-badge">📎 ${escapeHtml(attachment.filename)} (${formatBytes(attachment.size || 0)})</span>`
                : '<em>No file attached</em>'
            }
          </td>
        </tr>
      </table>

      <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716A; margin-top: 24px;">
        Product / Order Requirement:
      </div>
      <div class="notes-box">${escapeHtml(productRequirement)}</div>

      ${
        additionalRequirements && additionalRequirements.trim()
          ? `
        <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #78716A; margin-top: 20px;">
          Additional Requirements / Compliance Notes:
        </div>
        <div class="notes-box">${escapeHtml(additionalRequirements)}</div>
        `
          : ''
      }
    </div>
    <div class="footer">
      <div><strong>Inquiry Received:</strong> ${formattedDate}</div>
      <div style="margin-top: 4px;">Sent directly to: <code>${recipientEmail}</code> · To reply directly to the buyer, click "Reply" in your email client.</div>
    </div>
  </div>
</body>
</html>
`;

    const textContent = `
NEW BUYER INQUIRY — BELVORIS WEBSITE
====================================
Timestamp: ${formattedDate}

COMPANY & BUYER DETAILS:
- Company Name: ${companyName}
- Contact Person: ${fullName}
- Designation: ${designation || 'N/A'}
- Corporate Email: ${emailAddress}
- Phone / WhatsApp: ${contactNumber || 'N/A'}

ORDER SPECIFICATIONS:
- Product Category: ${productCategory}
- Estimated Quantity: ${orderQuantity || 'Flexible'}
- Target Delivery Date: ${targetDeliveryDate || 'N/A'}
- Attached References: ${attachment ? `${attachment.filename} (${formatBytes(attachment.size || 0)})` : 'None'}

PRODUCT REQUIREMENT:
${productRequirement}

ADDITIONAL COMPLIANCE & NOTES:
${additionalRequirements || 'None specified'}

====================================
Recipient: ${recipientEmail}
`;

    // 5. Send via Resend with visitor's email set as Reply-To
    const sendResult = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: emailAddress,
      subject: subject,
      html: htmlContent,
      text: textContent,
      attachments: emailAttachments
    });

    if (sendResult.error) {
      console.error('Resend API returned error:', sendResult.error);
      let errorMsg = sendResult.error.message || 'Failed to send inquiry email via Resend.';
      if (errorMsg.includes('only send testing emails to your own email address')) {
        errorMsg = `${errorMsg} (To deliver to ${recipientEmail}, please verify your domain in Resend at resend.com/domains and set FROM_EMAIL to an address on that domain, e.g. inquiries@yourdomain.com).`;
      }
      return res.status(500).json({
        success: false,
        error: errorMsg
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received and sent successfully.',
      id: sendResult.data?.id
    });
  } catch (err: any) {
    console.error('Unexpected server error while processing inquiry:', err);
    return res.status(500).json({
      success: false,
      error: err?.message || 'Internal server error while processing your inquiry.'
    });
  }
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatBytes(bytes: number): string {
  if (!bytes || bytes <= 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
