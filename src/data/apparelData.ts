export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedScope: string[];
  keyDeliverable: string;
}

export interface ProductCategoryItem {
  id: string;
  name: string;
  group: 'knits' | 'wovens' | 'outerwear' | 'essentials';
  fabricTypes: string;
  description: string;
  image: string;
  typicalMOQ: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  focusArea: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  bioNote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'apparel-sourcing',
    number: '01',
    title: 'Apparel Sourcing',
    shortDescription: 'Sourcing suitable apparel production resources according to buyer requirements.',
    detailedScope: [
      'Factory matching based on product complexity and target price point',
      'Supplier compliance and capability verification',
      'Yarn, knit, and woven mill network navigation'
    ],
    keyDeliverable: 'Targeted factory shortlist & initial feasibility report'
  },
  {
    id: 'product-development',
    number: '02',
    title: 'Product Development',
    shortDescription: 'Supporting product development, sampling, materials, trims, and specifications.',
    detailedScope: [
      'Tech pack interpretation and pattern grading assistance',
      'Fabric sourcing, lab dip approvals, and trim development',
      'Proto, fit, and pre-production sample development'
    ],
    keyDeliverable: 'Approved physical counter-samples & trim cards'
  },
  {
    id: 'factory-coordination',
    number: '03',
    title: 'Factory & Supplier Coordination',
    shortDescription: 'Coordinating production partners and communicating buyer requirements.',
    detailedScope: [
      'Bilingual daily production communication and order alignment',
      'Capacity reservation and lead-time planning',
      'Bottleneck resolution between knitters, dyehouses, and cut-and-sew lines'
    ],
    keyDeliverable: 'Centralized buyer-factory communication conduit'
  },
  {
    id: 'quality-control',
    number: '04',
    title: 'Quality Control',
    shortDescription: 'Supporting quality monitoring throughout the product and production process.',
    detailedScope: [
      'Inline inspection during cutting, sewing, and embellishment',
      'Measurement, stitch density, and visual workmanship verification',
      'Final Random Inspection (FRI) aligned with AQL 1.5 / 2.5 standards'
    ],
    keyDeliverable: 'Detailed digital inspection reports with high-resolution imagery'
  },
  {
    id: 'production-follow-up',
    number: '05',
    title: 'Production Follow-Up',
    shortDescription: 'Monitoring progress and maintaining communication throughout production.',
    detailedScope: [
      'Weekly Time & Action (T&A) calendar tracking',
      'Fabric in-house milestones and cutting progress verification',
      'Real-time proactive delay mitigation and status updates'
    ],
    keyDeliverable: 'Weekly transparent milestone & timeline logs'
  },
  {
    id: 'order-management',
    number: '06',
    title: 'Order Management',
    shortDescription: 'Supporting communication, timelines, documentation, and order follow-up.',
    detailedScope: [
      'Commercial documentation, packing lists, and export permits',
      'Carton labeling, barcode, and packaging compliance',
      'Freight forwarder handover and tracking until bill of lading'
    ],
    keyDeliverable: 'Complete compliant shipping documentation package'
  }
];

export const PRODUCT_CATEGORIES: ProductCategoryItem[] = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    group: 'knits',
    fabricTypes: 'Single Jersey, Pima Cotton, Slub, Organic Blends',
    description: 'Custom GSM weights from 140 to 280 GSM. Pigment dyes, enzyme washes, screen prints, and embroidery.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '1,000 pcs / colorway'
  },
  {
    id: 'polo-shirts',
    name: 'Polo Shirts',
    group: 'knits',
    fabricTypes: 'Classic Piqué, Honeycomb, Mercerized Cotton',
    description: 'Flat knit jacquard collars, mother-of-pearl or custom engraved buttons, reinforced side vents.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '800 pcs / colorway'
  },
  {
    id: 'shirts',
    name: 'Shirts',
    group: 'wovens',
    fabricTypes: 'Poplin, Oxford, Twill, Linen Blends, Yarn-Dyed Checks',
    description: 'Tailored casual and business shirts. Non-iron, garment-washed, spread and button-down collar constructions.',
    image: '/src/assets/images/belvoris_woven_outerwear_1791038929635.jpg',
    typicalMOQ: '600 pcs / style'
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    group: 'knits',
    fabricTypes: 'Heavyweight French Terry, Brushed Fleece (320–480 GSM)',
    description: 'Oversized boxy fits, double-layered hoods, custom metal eyelets, silicone-tipped drawstrings.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '600 pcs / colorway'
  },
  {
    id: 'sweatshirts',
    name: 'Sweatshirts',
    group: 'knits',
    fabricTypes: 'Loopback Terry, Diagonal Fleece, Cotton-Poly Blends',
    description: 'Clean crewneck silhouettes with 1x1 or 2x2 elastane rib trims, dropped shoulders, and garment-dye finishes.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '600 pcs / colorway'
  },
  {
    id: 'jackets',
    name: 'Jackets',
    group: 'outerwear',
    fabricTypes: 'Cotton Twill, Ripstop, Canvas, Water-Resistant Nylon',
    description: 'Lightweight coach jackets, unlined chore overshirts, denim jackets, and urban utility silhouettes.',
    image: '/src/assets/images/belvoris_woven_outerwear_1791038929635.jpg',
    typicalMOQ: '500 pcs / style'
  },
  {
    id: 'knitwear',
    name: 'Knitwear',
    group: 'knits',
    fabricTypes: 'Fine Gauge 12GG, Heavy Gauge 5GG, Cotton-Cashmere',
    description: 'Cardigans, roll-necks, and crew knits sourced from fully-fashioned computerized flat-knitting units.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '500 pcs / style'
  },
  {
    id: 'woven-garments',
    name: 'Woven Garments',
    group: 'wovens',
    fabricTypes: 'Chino Twills, Tencel, Linen, Cotton Canvas',
    description: 'Chino trousers, tailored Bermuda shorts, cargo pants, and structured casual bottomwear.',
    image: '/src/assets/images/belvoris_woven_outerwear_1791038929635.jpg',
    typicalMOQ: '800 pcs / style'
  },
  {
    id: 'casualwear',
    name: 'Casualwear',
    group: 'essentials',
    fabricTypes: 'Cotton-Modal, Ribbed Knits, Soft Touch Blends',
    description: 'Lounge pants, casual co-ords, relaxed track tops, and modern lifestyle separates.',
    image: '/src/assets/images/belvoris_fabric_detail_1791038990524.jpg',
    typicalMOQ: '600 pcs / style'
  },
  {
    id: 'workwear',
    name: 'Workwear',
    group: 'wovens',
    fabricTypes: 'Heavyweight Duck Canvas, Poly-Cotton Twill (240–320 GSM)',
    description: 'Reinforced triple-needle stitching, bar-tacked stress points, durable utility pockets, and industrial wash tolerance.',
    image: '/src/assets/images/belvoris_woven_outerwear_1791038929635.jpg',
    typicalMOQ: '1,000 pcs / style'
  },
  {
    id: 'kidswear',
    name: 'Kidswear',
    group: 'essentials',
    fabricTypes: 'Organic Combed Cotton, Soft Interlock, OEKO-TEX compliant',
    description: 'Baby rompers, children t-shirts, joggers, and playsuits with nickel-free snaps and skin-safe dyes.',
    image: '/src/assets/images/belvoris_fabric_detail_1791038990524.jpg',
    typicalMOQ: '1,000 pcs / style'
  },
  {
    id: 'fashion-basics',
    name: 'Fashion Basics',
    group: 'essentials',
    fabricTypes: 'Supreme Combed Jersey, Rib Knit 2x1, Seamless Blends',
    description: 'High-rotation wardrobe essentials: tank tops, base layers, long-sleeve crews, and minimalist undergarments.',
    image: '/src/assets/images/belvoris_knitwear_collection_1791038914608.jpg',
    typicalMOQ: '1,200 pcs / colorway'
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Buyer Inquiry',
    subtitle: 'Requirement Intake',
    description: 'You share tech packs, reference garments, target prices, order quantities, and target delivery windows.',
    focusArea: 'Clear technical & commercial alignment from day one'
  },
  {
    step: '02',
    title: 'Requirement Analysis',
    subtitle: 'Feasibility & Sourcing Audit',
    description: 'We evaluate fabric compositions, construction techniques, machine availability, and suitable manufacturing facilities.',
    focusArea: 'Determining the most efficient factory setup for your product type'
  },
  {
    step: '03',
    title: 'Sourcing & Product Development',
    subtitle: 'Materials & Trims',
    description: 'We source yarns, fabrics, dyes, buttons, labels, and specialized washes through our verified supplier network.',
    focusArea: 'Material matching and initial lab dips'
  },
  {
    step: '04',
    title: 'Sampling',
    subtitle: 'Fit & Quality Validation',
    description: 'Proto samples, fit samples, and size sets are produced and reviewed to ensure exact pattern fidelity.',
    focusArea: 'Physical fit, handfeel, and workmanship sign-off'
  },
  {
    step: '05',
    title: 'Costing & Quotation',
    subtitle: 'Transparent Pricing',
    description: 'Transparent FOB breakdown reflecting confirmed fabric yields, trim costs, manufacturing CMT, and packaging.',
    focusArea: 'No hidden surcharges; predictable international margins'
  },
  {
    step: '06',
    title: 'Production Coordination',
    subtitle: 'Line Planning & Execution',
    description: 'Purchase orders are confirmed. Fabric milling, bulk dyeing, and production lines are scheduled with weekly T&A tracking.',
    focusArea: 'Active monitoring of fabric in-house and sewing lines'
  },
  {
    step: '07',
    title: 'Quality Monitoring',
    subtitle: 'In-Line & Final Inspection',
    description: 'Continuous quality monitoring across cutting, sewing, finishing, and final random inspection (FRI) before packing.',
    focusArea: 'Strict adherence to international AQL standards'
  },
  {
    step: '08',
    title: 'Shipment Follow-Up',
    subtitle: 'Export & Handover',
    description: 'Coordination with appointed freight forwarders, export documentation, bill of lading issuance, and customs compliance.',
    focusArea: 'Seamless logistics handover to your designated port or air freight'
  }
];

export const WHY_BELVORIS_POINTS = [
  {
    title: 'Buyer-Focused Communication',
    description: 'Clear, proactive English communication with prompt response times across European and North American working hours. No communication blackouts or ambiguous status reports.'
  },
  {
    title: 'Bangladesh Sourcing Advantage',
    description: 'Direct access to one of the world’s most competitive and vertically integrated textile manufacturing ecosystems, backed by competitive duty structures and extensive yarn-spinning capacities.'
  },
  {
    title: 'End-to-End Coordination',
    description: 'We manage every intermediate stage between your design office and the final container sealing—eliminating fragmented supplier management on your end.'
  },
  {
    title: 'Quality Awareness',
    description: 'Systematic quality oversight focused on fabric weight tolerance, shrinkage stability, color fastness, stitch neatness, and precision packaging standards.'
  },
  {
    title: 'Flexible Product Sourcing',
    description: 'Ability to source both high-volume continuous retail programs and focused seasonal capsules across diverse knit, woven, and outerwear categories.'
  },
  {
    title: 'Long-Term Business Relationships',
    description: 'We prioritize repeatable trust, sustainable commercial integrity, and consistent year-over-year production reliability over short-term transactional gains.'
  }
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Wasiul Islam Riham',
    role: 'Managing Director',
    phone: '+880 1793 362538',
    email: 'contact@belvoris.com',
    bioNote: 'Leads international buyer relations, commercial negotiations, and overall sourcing operations across knitwear and woven production divisions.'
  },
  {
    name: 'Md Abdul Razzak',
    role: 'Chairman',
    phone: '+880 1713 961144',
    email: 'contact@belvoris.com',
    bioNote: 'Provides strategic oversight, supplier partnership governance, and long-term supply-chain capacity development in the Bangladesh textile sector.'
  }
];
