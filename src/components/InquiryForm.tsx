import React, { useState, useEffect } from 'react';
import { PRODUCT_CATEGORIES } from '../data/apparelData';
import { CheckCircle2, ArrowRight, AlertCircle, RefreshCw, FileText } from 'lucide-react';

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

export const InquiryForm: React.FC<InquiryFormProps> = ({ prefilledCategory, onClearPrefill }) => {
  const [formData, setFormData] = useState<FormState>({
    companyName: '',
    fullName: '',
    designation: '',
    contactNumber: '',
    emailAddress: '',
    productRequirement: '',
    orderQuantity: '1,000 - 3,000 pcs',
    targetDeliveryDate: '',
    productCategory: prefilledCategory || 'T-Shirts',
    additionalRequirements: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, productCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Contact person full name is required';
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Corporate email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address';
    }
    if (!formData.productRequirement.trim()) {
      newErrors.productRequirement = 'Please describe your apparel or sourcing requirement';
    }
    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'Please confirm agreement to be contacted regarding this inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate UI submission latency (Phase 1 prototype)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      fullName: '',
      designation: '',
      contactNumber: '',
      emailAddress: '',
      productRequirement: '',
      orderQuantity: '1,000 - 3,000 pcs',
      targetDeliveryDate: '',
      productCategory: 'T-Shirts',
      additionalRequirements: '',
      agreedToTerms: false
    });
    setErrors({});
    if (onClearPrefill) onClearPrefill();
  };

  const quantityOptions = [
    '500 - 1,000 pcs (Test / Capsule)',
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
            Share your requirements and our team will get back to you.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF9F5] border border-[#1A1A1A]/15 p-8 sm:p-12 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] relative">
          
          {isSubmitted ? (
            /* Success State Mockup */
            <div className="py-8 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-[#F3EFE8] border border-[#1A1A1A]/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#18181B]" />
              </div>

              <div className="text-xs uppercase tracking-[0.2em] text-[#8C827A] font-medium mb-2">
                Inquiry Intake Recorded (Prototype Mode)
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#18181B] mb-4">
                Thank you, {formData.fullName || 'Buyer'}
              </h3>
              <p className="text-sm sm:text-base text-[#524E48] font-light max-w-md mx-auto mb-8 leading-relaxed">
                Your sourcing inquiry for <strong className="font-medium text-[#18181B]">{formData.companyName}</strong> has been logged in the Phase 1 UI prototype. In Phase 2, this will route automatically to our direct sourcing inbox.
              </p>

              {/* Inquiry Summary Preview Card */}
              <div className="p-6 bg-[#F3EFE8] border border-[#1A1A1A]/10 text-left max-w-lg mx-auto mb-8 text-xs space-y-3">
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
                <div>
                  <span className="text-[#8C827A] font-mono uppercase tracking-wider block mb-1">Requirement Notes</span>
                  <p className="text-[#383531] font-light">{formData.productRequirement}</p>
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
              
              {/* Row 1: Company Name & Full Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="e.g. Nordic Atelier Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors ${
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
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Marcus Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors ${
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
                    Designation
                  </label>
                  <input
                    id="designation"
                    type="text"
                    placeholder="e.g. Head of Sourcing / Buyer"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                    Contact Number
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    placeholder="+44 20 7946 0991 / WhatsApp"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs uppercase tracking-[0.14em] text-[#383531] font-medium mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="buyer@brand-domain.com"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors ${
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
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] focus:outline-none focus:border-[#18181B] transition-colors cursor-pointer"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name} ({cat.group})
                      </option>
                    ))}
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
                    value={formData.orderQuantity}
                    onChange={(e) => setFormData({ ...formData, orderQuantity: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] focus:outline-none focus:border-[#18181B] transition-colors cursor-pointer"
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
                  placeholder="e.g. Q4 2026 / Spring-Summer 2027 / 90 days FOB"
                  value={formData.targetDeliveryDate}
                  onChange={(e) => setFormData({ ...formData, targetDeliveryDate: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors"
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
                  placeholder="Describe your garment specifications, target fabric weight (GSM), blends, finishes, colorways, or reference styles..."
                  value={formData.productRequirement}
                  onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                  className={`w-full px-4 py-3 bg-[#FAF9F5] border text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors resize-y ${
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
                  placeholder="e.g. OEKO-TEX, GOTS, specific lab testing requirements, custom barcode packaging..."
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF9F5] border border-[#1A1A1A]/20 text-sm text-[#18181B] placeholder-[#A8A196] focus:outline-none focus:border-[#18181B] transition-colors"
                />
              </div>

              {/* Checkbox: Agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.agreedToTerms}
                    onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#18181B] rounded-none border border-[#1A1A1A]/30 focus:ring-0 cursor-pointer accent-[#18181B]"
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
                  className="w-full py-4 text-xs font-medium tracking-[0.16em] uppercase text-[#FAF9F5] bg-[#18181B] hover:bg-[#2C2B29] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>RECORDING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Quiet Phase 1 Prototype Note */}
              <div className="text-center pt-2">
                <span className="text-[11px] text-[#8C827A] font-mono">
                  Phase 1 Interactive Prototype · Email automation connected in Phase 2
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
