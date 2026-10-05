import React, { useState, useEffect, useRef } from 'react';
import { EXPANDED_PRODUCT_PORTFOLIO } from '../data/apparelData';
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  RefreshCw,
  FileText,
  Paperclip,
  UploadCloud,
  X,
  FileCheck,
  Send
} from 'lucide-react';

interface InquiryFormProps {
  prefilledCategory?: string;
  onClearPrefill?: () => void;
}

interface FormState {
  companyName: string;
  fullName: string;
  designation: string;
  contactNumber: string;
  emailAddress: string;
  productRequirement: string;
  orderQuantity: string;
  targetDeliveryDate: string;
  productCategory: string;
  additionalRequirements: string;
  agreedToTerms: boolean;
}

interface FormErrors {
  companyName?: string;
  fullName?: string;
  emailAddress?: string;
  productRequirement?: string;
  agreedToTerms?: string;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ prefilledCategory, onClearPrefill }) => {
  const [formData, setFormData] = useState<FormState>({
    companyName: '',
    fullName: '',
    designation: '',
    contactNumber: '',
    emailAddress: '',
    productRequirement: '',
    orderQuantity: 'Flexible / Based on Sourcing Feasibility',
    targetDeliveryDate: '',
    productCategory: prefilledCategory || 'Denim Jeans & Bottoms',
    additionalRequirements: '',
    agreedToTerms: false
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, productCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // 4 MB maximum size limit to guarantee Vercel Serverless function compatibility
    const MAX_SIZE_MB = 4;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    if (file.size > MAX_SIZE_BYTES) {
      setFileError(`File size exceeds the ${MAX_SIZE_MB}MB serverless upload limit (${(file.size / (1024 * 1024)).toFixed(1)}MB). Please choose a file under ${MAX_SIZE_MB}MB or email large documents directly to efanrahman32824@gmail.com.`);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    // Supported extensions: PDF, JPG, JPEG, PNG, DOCX, DOC
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.docx', '.doc'];
    const fileNameLower = file.name.toLowerCase();
    const isAllowed = allowedExtensions.some((ext) => fileNameLower.endsWith(ext));

    if (!isAllowed) {
      setFileError('Unsupported file type. Please upload a PDF, JPG, JPEG, PNG, or DOCX document.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setAttachedFile(file);
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Contact person name is required';
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }

    if (!formData.productRequirement.trim()) {
      newErrors.productRequirement = 'Please describe your garment requirements';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'Please confirm agreement to be contacted regarding this sourcing inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let attachmentPayload = null;
      if (attachedFile) {
        const base64Data = await fileToBase64(attachedFile);
        attachmentPayload = {
          filename: attachedFile.name,
          content: base64Data,
          contentType: attachedFile.type,
          size: attachedFile.size
        };
      }

      const payload = {
        companyName: formData.companyName.trim(),
        fullName: formData.fullName.trim(),
        designation: formData.designation.trim(),
        contactNumber: formData.contactNumber.trim(),
        emailAddress: formData.emailAddress.trim(),
        productCategory: formData.productCategory,
        orderQuantity: formData.orderQuantity,
        targetDeliveryDate: formData.targetDeliveryDate.trim(),
        productRequirement: formData.productRequirement.trim(),
        additionalRequirements: formData.additionalRequirements.trim(),
        attachment: attachmentPayload
      };

      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setIsSubmitted(true);
      } else {
        const errMsg =
          data?.error ||
          'Failed to send inquiry email. Please check your details or contact us directly at efanrahman32824@gmail.com.';
        setSubmitError(errMsg);
      }
    } catch (err: any) {
      console.error('Submission network error:', err);
      setSubmitError(
        'A network or server error occurred while sending your inquiry. Please try again, or email us directly at efanrahman32824@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      companyName: '',
      fullName: '',
      designation: '',
      contactNumber: '',
      emailAddress: '',
      productRequirement: '',
      orderQuantity: 'Flexible / Based on Sourcing Feasibility',
      targetDeliveryDate: '',
      productCategory: 'Denim Jeans & Bottoms',
      additionalRequirements: '',
      agreedToTerms: false
    });
    setAttachedFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setErrors({});
    if (onClearPrefill) onClearPrefill();
  };

  const quantityOptions = [
    'Emerging Brand / Test Capsule (Reviewing Feasibility)',
    '500 - 1,000 pcs (Subject to mill & style specs)',
    '1,000 - 3,000 pcs',
    '3,000 - 5,000 pcs',
    '5,000 - 10,000 pcs',
    '10,000+ pcs (Continuous Program)'
  ];

  return (
    <section id="inquiry" className="py-24 sm:py-32 bg-[#FAF9F5] border-t border-[#1A1A1A]/8">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Form Header */}
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.22em] text-[#8C827A] font-medium mb-3">
            Sourcing Desk Intake
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#18181B] tracking-tight leading-[1.15]">
            TELL US WHAT YOU'RE LOOKING FOR
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#595550] font-light max-w-xl mx-auto">
            Share your requirements and reference materials—our team will review feasibility and get back to you soon.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF9F5] border border-[#1A1A1A]/15 p-8 sm:p-12 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#F3EFE8] border border-[#1A1A1A]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#18181B]" />
              </div>

              <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-2">
                Inquiry Received Successfully
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-4">
                Thank You, {formData.fullName || 'Buyer'}
              </h3>
              
              <div className="max-w-lg mx-auto mb-8 p-4 bg-[#F3EFE8] border border-[#1A1A1A]/10 text-sm text-[#2C2B29] leading-relaxed">
                Thank you for contacting BELVORIS. Your inquiry has been received successfully. Our team will review your requirements and get back to you soon.
              </div>

              {/* Inquiry Summary Preview Card */}
              <div className="p-6 bg-[#F3EFE8] border border-[#1A1A1A]/10 text-left max-w-lg mx-auto mb-8 text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider">Company</span>
                  <span className="font-medium text-[#18181B]">{formData.companyName}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider">Category</span>
                  <span className="font-medium text-[#18181B]">{formData.productCategory}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider">Quantity Bracket</span>
                  <span className="font-medium text-[#18181B]">{formData.orderQuantity}</span>
                </div>
                {formData.targetDeliveryDate && (
                  <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                    <span className="text-[#8C827A] font-mono uppercase tracking-wider">Target Delivery</span>
                    <span className="font-medium text-[#18181B]">{formData.targetDeliveryDate}</span>
                  </div>
                )}
                <div className="border-b border-[#1A1A1A]/10 pb-2">
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider block mb-1">Requirement Notes</span>
                  <p className="text-[#383531] font-light">{formData.productRequirement}</p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider">Product References</span>
                  <span className="font-medium text-[#18181B] flex items-center gap-1.5">
                    {attachedFile ? (
                      <>
                        <FileCheck className="w-3.5 h-3.5 text-[#18181B]" />
                        <span>{attachedFile.name} ({formatFileSize(attachedFile.size)})</span>
                      </>
                    ) : (
                      <span className="text-[#8C827A] font-light">None attached (Optional)</span>
                    )}
                  </span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.14em] uppercase text-[#18181B] bg-transparent border border-[#18181B]/30 hover:border-[#18181B] hover:bg-[#18181B]/5 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          ) : (
            /* Interactive Inquiry Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Submission Error Banner */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 text-left animate-in fade-in duration-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-1">
                        Inquiry Submission Issue
                      </div>
                      <p className="text-xs text-red-700 leading-relaxed font-light">
                        {submitError}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Row 1: Company Name & Full Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Nordic Atelier Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60 ${
                      errors.companyName ? 'border-red-500' : 'border-[#1A1A1A]/20'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.companyName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Contact Person Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Sarah Lindqvist"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60 ${
                      errors.fullName ? 'border-red-500' : 'border-[#1A1A1A]/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Designation & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="designation" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Designation / Title
                  </label>
                  <input
                    id="designation"
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Sourcing Director / Lead Buyer"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Contact / WhatsApp Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    disabled={isSubmitting}
                    placeholder="e.g. +44 20 7946 0991"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Row 3: Corporate Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                  Corporate Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  disabled={isSubmitting}
                  placeholder="e.g. sourcing@nordic-atelier.com"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60 ${
                    errors.emailAddress ? 'border-red-500' : 'border-[#1A1A1A]/20'
                  }`}
                />
                {errors.emailAddress && (
                  <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.emailAddress}</span>
                  </p>
                )}
              </div>

              {/* Row 4: Product Category & Estimated Order Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="productCategory" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Product Category
                  </label>
                  <select
                    id="productCategory"
                    disabled={isSubmitting}
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] focus:outline-none focus:border-[#18181B] transition-colors cursor-pointer disabled:opacity-60"
                  >
                    <option value="Woven Apparel (All Items)">Woven Apparel (All Items)</option>
                    <option value="Knit Apparel (All Items)">Knit Apparel (All Items)</option>
                    <option value="Denim Collection">Denim Collection (Jeans, Jackets, Shirts)</option>
                    {EXPANDED_PRODUCT_PORTFOLIO.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name} ({cat.group.toUpperCase()})
                      </option>
                    ))}
                    <option value="Complete Supply Chain Consultation">Complete Supply Chain Consultation</option>
                    <option value="Emerging Brand Starter Program">Emerging Brand Starter Program</option>
                    <option value="Multi-Category Program">Multi-Category Program</option>
                    <option value="Other Custom Sourcing">Other Custom Sourcing</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="orderQuantity" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Estimated Order Quantity
                  </label>
                  <select
                    id="orderQuantity"
                    disabled={isSubmitting}
                    value={formData.orderQuantity}
                    onChange={(e) => setFormData({ ...formData, orderQuantity: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] focus:outline-none focus:border-[#18181B] transition-colors cursor-pointer disabled:opacity-60"
                  >
                    {quantityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Target Delivery Date */}
              <div>
                <label htmlFor="targetDeliveryDate" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                  Target Delivery Date / Season
                </label>
                <input
                  id="targetDeliveryDate"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="e.g. Q4 2026 / Spring-Summer 2027 / 90 days FOB"
                  value={formData.targetDeliveryDate}
                  onChange={(e) => setFormData({ ...formData, targetDeliveryDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60"
                />
              </div>

              {/* Row 6: Product / Order Requirement */}
              <div>
                <label htmlFor="productRequirement" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                  Product / Order Requirement <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="productRequirement"
                  rows={4}
                  disabled={isSubmitting}
                  placeholder="Describe your garment specifications, target fabric weight (GSM), blends, finishes, colorways, or reference styles..."
                  value={formData.productRequirement}
                  onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors resize-y disabled:opacity-60 ${
                    errors.productRequirement ? 'border-red-500' : 'border-[#1A1A1A]/20'
                  }`}
                />
                {errors.productRequirement && (
                  <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.productRequirement}</span>
                  </p>
                )}
              </div>

              {/* Row 7: Additional Requirements */}
              <div>
                <label htmlFor="additionalRequirements" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                  Additional Requirements / Compliance Notes
                </label>
                <input
                  id="additionalRequirements"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="e.g. OEKO-TEX, GOTS, specific lab testing requirements, custom barcode packaging..."
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors disabled:opacity-60"
                />
              </div>

              {/* Row 8: Optional File Attachment Field */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="fileAttachmentInput" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium">
                    Attach Product References (Optional)
                  </label>
                  <span className="text-[11px] font-mono text-[#8C827A]">
                    Max 4 MB · PDF, JPG, PNG, DOCX
                  </span>
                </div>
                <p className="text-xs text-[#6B655D] mb-3 font-light leading-relaxed">
                  Upload product images, tech packs, specifications, or reference documents.
                </p>

                {/* Hidden File Input */}
                <input
                  ref={fileInputRef}
                  id="fileAttachmentInput"
                  type="file"
                  disabled={isSubmitting}
                  accept=".pdf,.jpg,.jpeg,.png,.docx,.doc"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* File Attachment Presentation Box */}
                {!attachedFile ? (
                  <div
                    onClick={() => {
                      if (!isSubmitting) fileInputRef.current?.click();
                    }}
                    className="border border-dashed border-[#1A1A1A]/25 hover:border-[#18181B] bg-[#F6F4EF]/60 hover:bg-[#F6F4EF] p-6 text-center cursor-pointer transition-all duration-200 group"
                  >
                    <UploadCloud className="w-6 h-6 text-[#8C827A] group-hover:text-[#18181B] mx-auto mb-2 transition-colors" />
                    <div className="text-xs text-[#18181B] font-medium">
                      <span>Click to select file</span>
                      <span className="text-[#6B655D] font-normal"> or drag and drop</span>
                    </div>
                    <div className="text-[11px] text-[#8C827A] mt-1 font-mono">
                      Supported formats: PDF, JPG, JPEG, PNG, DOCX (Optional)
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#F3EFE8] border border-[#1A1A1A]/15 flex items-center justify-between gap-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-9 h-9 bg-[#FAF9F5] border border-[#1A1A1A]/10 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-[#18181B]" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-medium text-[#18181B] truncate">
                          {attachedFile.name}
                        </div>
                        <div className="text-[11px] font-mono text-[#8C827A]">
                          {formatFileSize(attachedFile.size)} · Ready to attach
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleRemoveFile}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#B91C1C] hover:text-[#7F1D1D] bg-[#FAF9F5] border border-[#B91C1C]/20 hover:border-[#B91C1C]/40 transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                )}

                {fileError && (
                  <p className="text-[11px] text-red-600 mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{fileError}</span>
                  </p>
                )}
              </div>

              {/* Checkbox: Agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    disabled={isSubmitting}
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#18181B] rounded-none border border-[#1A1A1A]/30 focus:ring-0 cursor-pointer accent-[#18181B] disabled:opacity-60"
                  />
                  <span className="text-xs text-[#524E48] leading-relaxed group-hover:text-[#18181B] transition-colors">
                    I agree to be contacted regarding my inquiry.
                  </span>
                </label>
                {errors.agreedToTerms && (
                  <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.agreedToTerms}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>SENDING INQUIRY...</span>
                    </span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security & Recipient Notice */}
              <div className="text-center pt-2">
                <span className="text-[11px] text-[#8C827A] font-mono">
                  Encrypted server-side delivery to efanrahman32824@gmail.com
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
