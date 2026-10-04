// Existing apparel image imports
import catTshirtImg from '../assets/images/belvoris_cat_tshirt_1791039678735.jpg';
import catPoloImg from '../assets/images/belvoris_cat_polo_1791039693046.jpg';
import catShirtImg from '../assets/images/belvoris_cat_shirt_1791039706539.jpg';
import catHoodieImg from '../assets/images/belvoris_cat_hoodie_1791039718277.jpg';
import catSweatshirtImg from '../assets/images/belvoris_cat_sweatshirt_1791039730227.jpg';
import catJacketImg from '../assets/images/belvoris_cat_jacket_1791039741928.jpg';
import catKnitwearImg from '../assets/images/belvoris_cat_knitwear_1791039754475.jpg';
import catWovensImg from '../assets/images/belvoris_cat_wovens_1791039767081.jpg';
import catCasualwearImg from '../assets/images/belvoris_cat_casualwear_1791039779616.jpg';
import catWorkwearImg from '../assets/images/belvoris_cat_workwear_1791039792590.jpg';
import catKidswearImg from '../assets/images/belvoris_cat_kidswear_1791039804608.jpg';
import catBasicsImg from '../assets/images/belvoris_cat_basics_1791039817477.jpg';

// New Denim hero & category image imports
import denimHeroImg from '../assets/images/belvoris_denim_hero_1791126989758.jpg';
import denimJeansImg from '../assets/images/belvoris_denim_jeans_1791127004103.jpg';
import denimShirtsImg from '../assets/images/belvoris_denim_shirts_1791127016684.jpg';
import denimJacketsImg from '../assets/images/belvoris_denim_jackets_1791127028804.jpg';
import denimSkirtsShortsImg from '../assets/images/belvoris_denim_skirts_shorts_1791127039824.jpg';
import denimWashesImg from '../assets/images/belvoris_denim_washes_1791127051706.jpg';

// Supply Chain (Fiber to Shipment - 8 stages) image imports
import chainFiberYarnImg from '../assets/images/belvoris_chain_fiber_yarn_1791127063365.jpg';
import chainFabricDevImg from '../assets/images/belvoris_chain_fabric_dev_1791127078208.jpg';
import chainDyeingProcessImg from '../assets/images/belvoris_chain_dyeing_process_1791127091417.jpg';
import chainSamplingDevImg from '../assets/images/belvoris_chain_sampling_dev_1791127103203.jpg';
import chainGarmentMfgImg from '../assets/images/belvoris_chain_garment_mfg_1791127116110.jpg';
import chainWashingFinishImg from '../assets/images/belvoris_chain_washing_finish_1791127128236.jpg';
import chainQualityInspectImg from '../assets/images/belvoris_chain_quality_inspect_1791127142258.jpg';
import chainPackingShipImg from '../assets/images/belvoris_chain_packing_ship_1791127156404.jpg';

// Emerging brands & materials image imports
import emergingBrandsImg from '../assets/images/belvoris_emerging_brands_1791127167885.jpg';
import materialsTrimsImg from '../assets/images/belvoris_cat_materials_trims_1791127179324.jpg';

// Major category hero image imports (Woven and Knit)
import wovenOuterwearImg from '../assets/images/belvoris_woven_outerwear_1791038929635.jpg';
import knitwearCollectionImg from '../assets/images/belvoris_knitwear_collection_1791038914608.jpg';

export {
  denimHeroImg,
  emergingBrandsImg,
  wovenOuterwearImg,
  knitwearCollectionImg
};

export const HEAD_OFFICE = {
  title: 'Head Office',
  city: 'Uttara, Dhaka',
  country: 'Bangladesh',
  addressLine: 'House-19, Road-02, Sector-06, Uttara, Dhaka, Bangladesh',
  description:
    'Strategically located in Uttara, Dhaka, with convenient access to the Dhaka international airport area, our head office provides a convenient base for buyer communication, sourcing coordination, and business meetings.',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=House-19,+Road-02,+Sector-06,+Uttara,+Dhaka,+Bangladesh'
};

export interface MajorCategorySummary {
  id: string;
  name: string;
  shortTag: string;
  scope: string;
  description: string;
  keyProducts: string[];
  fabricFocus: string;
  image: string;
  filterKey: 'wovens' | 'knitwear';
}

export const MAJOR_CATEGORIES: MajorCategorySummary[] = [
  {
    id: 'woven',
    name: 'Woven Apparel',
    shortTag: 'Tailored & Casual Weaves',
    scope: 'Woven shirts, trousers, denim, jackets, casualwear, and other woven apparel.',
    description:
      'Engineered with precision cutting and stitching across twill, poplin, linen, canvas, and heavy woven denim. Sourced from partner mills with comprehensive garment-washing and dry-finishing capabilities.',
    keyProducts: ['Woven Dress & Casual Shirts', 'Trousers, Chinos & Tailored Shorts', 'Denim Apparel & Jackets', 'Utility Jackets & Overshirts', 'Casualwear Separates'],
    fabricFocus: 'Poplin, Oxford, Chino Twill, Canvas, Linen, Tencel, Denim',
    image: wovenOuterwearImg,
    filterKey: 'wovens'
  },
  {
    id: 'knit',
    name: 'Knit Apparel',
    shortTag: 'Circular & Flat Knits',
    scope: 'T-shirts, polo shirts, sweatshirts, hoodies, knitwear, and other knitted apparel.',
    description:
      'Comfort-driven circular and flat-knitted garments produced across combed organic jersey, durable piqué, heavyweight loopback fleece, and fully-fashioned computerized sweaters.',
    keyProducts: ['Single Jersey & Heavyweight T-Shirts', 'Classic & Jacquard Piqué Polos', 'Loopback Sweatshirts & Crewnecks', 'Brushed French Terry Hoodies', 'Computerized Flat-Knit Sweaters'],
    fabricFocus: 'Single Jersey, Piqué, French Terry, Fleece, Rib Knits, Cashmere Blends',
    image: knitwearCollectionImg,
    filterKey: 'knitwear'
  }
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedScope: string[];
  keyDeliverable: string;
}

export type PortfolioGroup = 'denim' | 'knitwear' | 'wovens' | 'essentials' | 'materials';

export interface ProductCategoryItem {
  id: string;
  name: string;
  group: PortfolioGroup;
  fabricTypes: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface DenimProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specifications: string[];
  washesAvailable: string[];
}

export interface DenimSolutionItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SupplyChainStageItem {
  stageNumber: string;
  name: string;
  shortLabel: string;
  description: string;
  belvorisRole: string;
  keyOutputs: string[];
  image: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  phone: string;
  email: string;
  bioNote: string;
}

// -------------------------------------------------------------
// DEDICATED DENIM SOLUTIONS & PRODUCTS
// -------------------------------------------------------------
export const DENIM_HERO_DATA = {
  headline: 'ENGINEERED DENIM, FROM RAW WEAVE TO TIMELESS WASHES',
  description:
    'Denim is our marquee specialty. We connect global brands with Bangladesh’s premier denim mills and specialized laundry facilities—offering comprehensive coordination across fabric weights, laser whiskers, ozone washing, and tailored fits.',
  image: denimHeroImg
};

export const DENIM_PRODUCTS: DenimProductItem[] = [
  {
    id: 'denim-jeans',
    title: 'Denim Jeans & Trousers',
    subtitle: 'Classic 5-Pocket & Modern Silhouettes',
    description:
      'Engineered in skinny, slim, straight, relaxed, flare, and wide-leg fits. Constructed with reinforced copper rivets, chain-stitched hems, and premium pocketing.',
    image: denimJeansImg,
    specifications: ['Weight: 9.5 oz – 14.5 oz', 'Compositions: 100% Cotton, Cotton-Elastane, Tencel Blends, Recycled Cotton', 'Construction: 3x1 RHT, LHT, Cross-hatch, Broken Twill'],
    washesAvailable: ['Raw / Rinse', 'Enzyme Stonewash', 'Bleach & Vintage Wash', 'Tinted Ecru & Dirty Wash']
  },
  {
    id: 'denim-jackets',
    title: 'Denim Jackets & Overshirts',
    subtitle: 'Trucker, Chore & Utility Outerwear',
    description:
      'From heritage Type I, II, and III trucker jackets to contemporary drop-shoulder chore coats and lined utility jackets with customized shank buttons.',
    image: denimJacketsImg,
    specifications: ['Weight: 11 oz – 15 oz Heavy Twill', 'Hardware: Custom engraved zinc-alloy shanks, copper rivets', 'Details: Twin-needle flat felled seams, adjustable waist tabs'],
    washesAvailable: ['Deep Indigo Rinse', 'Heavy Stonewash with Hand Abrasion', 'Mid-Blue Marble Wash', 'Laser Patterning']
  },
  {
    id: 'denim-shirts',
    title: 'Denim Shirts',
    subtitle: 'Western, Utility & Lightweight Button-Downs',
    description:
      'Refined lightweight denim and chambray shirts featuring western yokes, pearl snap fastenings, spread collars, and garment-washed softness.',
    image: denimShirtsImg,
    specifications: ['Weight: 4.5 oz – 7.5 oz Shirting Twill / Chambray', 'Closures: Pearl snap buttons, horn buttons, concealed plackets', 'Fit: Tailored, Regular, and Relaxed Resort fits'],
    washesAvailable: ['Enzyme Soft Wash', 'Bleach Wash', 'Sun-Faded Indigo', 'Overdyed Olive & Charcoal']
  },
  {
    id: 'denim-skirts-shorts',
    title: 'Denim Skirts & Shorts',
    subtitle: 'Contemporary Casual & Fashion Separates',
    description:
      'High-waisted A-line skirts, midi slit skirts, utility cargo shorts, and classic 5-pocket denim cut-offs tailored for seasonal collections.',
    image: denimSkirtsShortsImg,
    specifications: ['Weight: 9 oz – 12.5 oz Comfort Stretch & Rigid', 'Finishes: Raw cut hem, frayed edges, clean topstitched hems', 'Features: High-rise waistbands, deep front pockets'],
    washesAvailable: ['Sun-bleached Light Blue', 'Medium Indigo with Whisker Finish', 'Optic White & Natural Ecru']
  },
  {
    id: 'denim-fabrics-washes',
    title: 'Denim Fabric Sourcing & Custom Washes',
    subtitle: 'Mills, Weaves, Sustainable Laundries',
    description:
      'Direct coordination with certified denim mills in Bangladesh for bespoke fabric development, selvedge weaves, sustainable water-less ozone washing, and eco-friendly dye chemistry.',
    image: denimWashesImg,
    specifications: ['Shades: Deep Pure Indigo, Stay-Black, Ecru, Cast Tints (Green/Red Cast)', 'Technology: Laser fading, Ozone bleaching, Eco-stone washing', 'Certifications: Mill compliance with OEKO-TEX, GOTS, GRS where applicable'],
    washesAvailable: ['Zero-Bleach Ozone Wash', 'Laser Whiskering & Honeycombs', 'Resin 3D Crinkles', 'Mineral & Pigment Tints']
  }
];

export const DENIM_SOLUTIONS: DenimSolutionItem[] = [
  {
    number: '01',
    title: 'Fabric Sourcing & Mill Coordination',
    description: 'Direct alignment with major spinning and denim mills in Bangladesh to select exact yarn counts, slub profiles, ring spins, and stretch recovery performance.',
    deliverables: ['Yarn & weave spec matching', 'Mill lab dips & indigo shade bands', 'Fabric shrinkage and torque test records']
  },
  {
    number: '02',
    title: 'Product Development & Pattern Grading',
    description: 'Transforming buyer tech packs and fit inspirations into production-ready patterns, calculating shrinkage allowances for wet laundry processing.',
    deliverables: ['Pre-wash vs post-wash pattern grading', 'Physical counter-sample mockups', 'Trim card approvals (leather patches, rivets, shanks)']
  },
  {
    number: '03',
    title: 'Laundry & Wet Processing Coordination',
    description: 'Working with advanced industrial laundry facilities equipped with modern laser, ozone, and enzyme processing to achieve your desired vintage or contemporary handfeel.',
    deliverables: ['Wash recipe consistency across production lots', 'Ozone & eco-wash protocol validation', 'Hand-scrape and localized abrasion sign-offs']
  },
  {
    number: '04',
    title: 'Rigorous Denim Quality Control',
    description: 'Dedicated in-line inspection targeting high-stress points: pocket bar-tacking, belt loop pull strength, crotch reinforcement, and AQL standard conformance.',
    deliverables: ['Tensile & tear strength verification', 'Dry/wet rubbing fastness test audits', 'Final Random Inspection (FRI) visual report']
  }
];

// -------------------------------------------------------------
// COMPLETE SUPPLY CHAIN: FIBER TO SHIPMENT (8 STAGES)
// -------------------------------------------------------------
export const SUPPLY_CHAIN_STAGES: SupplyChainStageItem[] = [
  {
    stageNumber: '01',
    name: 'Fiber / Yarn',
    shortLabel: 'Raw Material Selection',
    description:
      'The foundation of garment quality begins with selecting suitable fibers—organic cotton, recycled cotton, Tencel, modal, or technical blends—and spinning yarn with specified counts and twists.',
    belvorisRole: 'We help buyers evaluate yarn compositions and coordinate with reputable spinning mills to secure consistent raw material supplies.',
    keyOutputs: ['Yarn count & composition verification', 'Fiber traceability audit options', 'Ring vs open-end spinning alignment'],
    image: chainFiberYarnImg
  },
  {
    stageNumber: '02',
    name: 'Fabric Development',
    shortLabel: 'Weaving & Knitting',
    description:
      'Yarns are transformed into structured knits (jersey, pique, French terry) or woven textiles (twill, poplin, canvas, denim) with precise GSM weights, handfeel, and recovery properties.',
    belvorisRole: 'We coordinate loom setups and knitting runs, cross-checking knit structures and fabric densities against your tech pack guidelines.',
    keyOutputs: ['Custom fabric swatches & strike-offs', 'GSM & width stability verification', 'Pre-production fabric test reports'],
    image: chainFabricDevImg
  },
  {
    stageNumber: '03',
    name: 'Dyeing & Processing',
    shortLabel: 'Color Chemistry & Finishes',
    description:
      'Textiles undergo pre-treatment, dyeing, and chemical finishing. Whether reactive, sulfur, vat, or indigo rope dyeing, color accuracy is formulated and standardized.',
    belvorisRole: 'We manage lab dip approvals under standardized D65 lighting booths, reviewing color fastness, shrinkage control, and shade consistency.',
    keyOutputs: ['Lab dip approvals (A/B/C/D submissions)', 'Color fastness to washing & perspiration testing', 'Shade continuity across dye lots'],
    image: chainDyeingProcessImg
  },
  {
    stageNumber: '04',
    name: 'Product Development & Sampling',
    shortLabel: 'Fit & Pattern Engineering',
    description:
      'First prototypes, fit samples, and size sets are produced to validate silhouette, proportions, seam finishes, and custom trims before bulk production is authorized.',
    belvorisRole: 'We review physical garments side-by-side with tech packs, coordinating pattern adjustments and providing actionable fit feedback to factories.',
    keyOutputs: ['Proto sample & fit revision reports', 'Graded measurement charts (XS–XXL)', 'Approved trim cards (labels, zippers, buttons)'],
    image: chainSamplingDevImg
  },
  {
    stageNumber: '05',
    name: 'Garment Manufacturing',
    shortLabel: 'Cutting & Sewing Assembly',
    description:
      'Bulk fabric is tension-free spread, precision cut, and routed to dedicated sewing assembly lines equipped with modern sewing and finishing machinery.',
    belvorisRole: 'We monitor production progress on-site, verifying machine setups, needle gauges, and inline stitching density throughout the run.',
    keyOutputs: ['Daily cutting and sewing output tracking', 'Inline defect logging & bottleneck resolution', 'Initial production sample approval'],
    image: chainGarmentMfgImg
  },
  {
    stageNumber: '06',
    name: 'Washing & Finishing',
    shortLabel: 'Wet Processing & Handfeel',
    description:
      'Garments receive specialized washing treatments—silicone softening, enzyme wash, garment dye, ozone wash, or denim fading—followed by pressing, thread trimming, and drying.',
    belvorisRole: 'We oversee laundry recipes to ensure consistent handfeel and appearance across all production bundles, avoiding excessive shrinkage or fabric weakening.',
    keyOutputs: ['Post-wash measurement auditing', 'Handfeel standard approval', 'Thread trimming & steam pressing compliance'],
    image: chainWashingFinishImg
  },
  {
    stageNumber: '07',
    name: 'Quality Inspection',
    shortLabel: 'In-Line & Final AQL Audit',
    description:
      'Comprehensive quality oversight across critical parameters: measurement tolerances, seam slippage, color shading, barcode scans, and cosmetic appearance.',
    belvorisRole: 'We perform in-process quality spot checks and a thorough Final Random Inspection (FRI) adhering to international AQL 1.5 / 2.5 standards.',
    keyOutputs: ['Full digital AQL inspection report', 'Defect classification (Critical, Major, Minor)', 'High-resolution photo evidence of audited cartons'],
    image: chainQualityInspectImg
  },
  {
    stageNumber: '08',
    name: 'Packing & Shipment',
    shortLabel: 'Export Logistics Handover',
    description:
      'Garments are polybagged, tagged with SKU barcodes, packed into heavy-duty export master cartons, and handed over to designated freight forwarders for sea or air transit.',
    belvorisRole: 'We oversee carton drop-testing, palletizing, commercial documentation, bill of lading issuance, and export customs clearance.',
    keyOutputs: ['Detailed packing list and shipping marks verification', 'Carton integrity & barcode scan verification', 'Smooth handover to buyer freight forwarder'],
    image: chainPackingShipImg
  }
];

// -------------------------------------------------------------
// EXPANDED PRODUCT PORTFOLIO CATEGORIES (5 GROUPS)
// -------------------------------------------------------------
export const EXPANDED_PRODUCT_PORTFOLIO: ProductCategoryItem[] = [
  // 1. DENIM
  {
    id: 'portfolio-denim-jeans',
    name: 'Denim Jeans & Bottoms',
    group: 'denim',
    fabricTypes: 'Rigid & Stretch Denim (9.5–14.5 oz), Cotton-Tencel, Recycled Twill',
    description: 'Tailored 5-pocket jeans, wide-leg trousers, cargo denim, and selvedge silhouettes with custom washes and hardware.',
    image: denimJeansImg,
    highlights: ['Tailored & relaxed fits', 'Enzyme, stone & bleach finishes', 'Custom shanks & rivets']
  },
  {
    id: 'portfolio-denim-jackets',
    name: 'Denim Jackets & Outerwear',
    group: 'denim',
    fabricTypes: '11–15 oz Heavy Cotton Denim, Sherpa-Lined, Overdyed',
    description: 'Classic trucker jackets, chore coats, utility overshirts, and boxy oversized denim outerwear.',
    image: denimJacketsImg,
    highlights: ['Heritage & modern cuts', 'Vintage marble & ozone washes', 'Heavy-duty seam construction']
  },
  {
    id: 'portfolio-denim-shirts',
    name: 'Denim Shirts & Chambray',
    group: 'denim',
    fabricTypes: '4.5–7.5 oz Lightweight Indigo Twill, Cotton-Linen, Slub Chambray',
    description: 'Western snap shirts, resort button-downs, and minimalist utility work shirts with garment-washed softness.',
    image: denimShirtsImg,
    highlights: ['Pearl snap buttons', 'Garment enzyme softened', 'Spread & band collars']
  },
  {
    id: 'portfolio-denim-skirts-shorts',
    name: 'Denim Skirts & Shorts',
    group: 'denim',
    fabricTypes: '9–13 oz Comfort Stretch & 100% Cotton Denim',
    description: 'A-line mini and midi skirts with front slits, cut-off denim shorts, and tailored bermuda lengths.',
    image: denimSkirtsShortsImg,
    highlights: ['Raw & clean hems', 'High-waisted tailoring', 'Whiskered & vintage tints']
  },
  {
    id: 'portfolio-denim-fabric-washes',
    name: 'Denim Fabrics & Wash Development',
    group: 'denim',
    fabricTypes: 'Mill-Direct Indigo, Stay-Black, Raw Selvedge, Eco-Tencel Blends',
    description: 'Custom wash development: stone-less enzyme, ozone bleaching, 3D whisker whisking, and sustainable laundry chemistry.',
    image: denimWashesImg,
    highlights: ['Mill fabric development', 'Water-saving wash recipes', 'Custom shade swatches']
  },

  // 2. KNITWEAR
  {
    id: 'portfolio-t-shirts',
    name: 'T-Shirts & Tanks',
    group: 'knitwear',
    fabricTypes: 'Single Jersey, Pima Cotton, Slub, 100% Organic Cotton (140–280 GSM)',
    description: 'Crewnecks, oversized streetwear tees, boxy crops, and ribbed tanks with pigment dyes, reactive dyes, or screenprints.',
    image: catTshirtImg,
    highlights: ['Custom GSM weights', 'Enzyme washed handfeel', 'Screenprint & embroidery']
  },
  {
    id: 'portfolio-polo-shirts',
    name: 'Polo Shirts',
    group: 'knitwear',
    fabricTypes: 'Classic Piqué, Honeycomb Knit, Mercerized Cotton',
    description: 'Flat knit jacquard collars, mother-of-pearl or engraved buttons, side vents, and athletic or casual silhouettes.',
    image: catPoloImg,
    highlights: ['Jacquard knit collars', 'Preshrunk pique fabric', 'Custom button plackets']
  },
  {
    id: 'portfolio-hoodies',
    name: 'Hoodies',
    group: 'knitwear',
    fabricTypes: 'Heavyweight French Terry, Brushed Fleece (320–480 GSM)',
    description: 'Drop-shoulder hoodies, boxy streetwear cuts, double-layered hoods, silicone-tipped drawstrings, and custom eyelets.',
    image: catHoodieImg,
    highlights: ['Heavyweight fleece', 'Double-layered hood', 'Silicone-tipped drawcords']
  },
  {
    id: 'portfolio-sweatshirts',
    name: 'Sweatshirts & Crewnecks',
    group: 'knitwear',
    fabricTypes: 'Loopback Terry, Diagonal Fleece, Cotton-Poly Blends (280–380 GSM)',
    description: 'Minimalist crewnecks with 1x1 or 2x2 elastane rib trims, raglan or set-in sleeves, and vintage wash treatments.',
    image: catSweatshirtImg,
    highlights: ['1x1 & 2x2 elastane ribs', 'Garment wash stability', 'Clean neck taping']
  },
  {
    id: 'portfolio-knitwear-sweaters',
    name: 'Fully-Fashioned Knitwear',
    group: 'knitwear',
    fabricTypes: 'Fine Gauge 12GG, Mid Gauge 7GG, Heavy Gauge 5GG, Cotton-Cashmere Blends',
    description: 'Computerized flat-knitted sweaters, cardigans, roll-necks, and textured cable pullovers.',
    image: catKnitwearImg,
    highlights: ['Computerized flat knit', 'Rib & cable structures', 'Fine handfeel yarns']
  },

  // 3. WOVEN APPAREL
  {
    id: 'portfolio-woven-shirts',
    name: 'Tailored & Casual Shirts',
    group: 'wovens',
    fabricTypes: 'Poplin, Oxford, Twill, Yarn-Dyed Checks, Linen Blends',
    description: 'Button-down casual shirts, crisp business formalwear, camp collar resort shirts, and garment-washed overshirts.',
    image: catShirtImg,
    highlights: ['Precision collar grading', 'Yarn-dyed patterns', 'Non-iron & soft finishes']
  },
  {
    id: 'portfolio-woven-trousers',
    name: 'Woven Trousers & Chinos',
    group: 'wovens',
    fabricTypes: 'Chino Twills, Tencel, Cotton-Linen, Stretch Canvas',
    description: 'Slim and relaxed chinos, pleated trousers, tailored Bermuda shorts, and modern casual bottoms.',
    image: catWovensImg,
    highlights: ['Clean waistband inner', 'YKK metal zips', 'Durable pocketing fabric']
  },
  {
    id: 'portfolio-woven-jackets',
    name: 'Casual Jackets & Outerwear',
    group: 'wovens',
    fabricTypes: 'Cotton Twill, Ripstop, Canvas, Water-Resistant Nylon',
    description: 'Unlined chore jackets, coach jackets, zip overshirts, and lightweight urban transition outerwear.',
    image: catJacketImg,
    highlights: ['Weather-resistant finishes', 'Reinforced stress points', 'Clean interior binding']
  },
  {
    id: 'portfolio-woven-casualwear',
    name: 'Casualwear & Lounge Separates',
    group: 'wovens',
    fabricTypes: 'Cotton-Modal, Washed Poplin, Linen-Cotton Blends',
    description: 'Relaxed pull-on pants, resort co-ord sets, casual utility overshirts, and leisurewear.',
    image: catCasualwearImg,
    highlights: ['Elasticated waistbands', 'Breathable natural fibers', 'Soft garment wash']
  },

  // 4. FASHION ESSENTIALS
  {
    id: 'portfolio-fashion-basics',
    name: 'Wardrobe Basics & Underlayers',
    group: 'essentials',
    fabricTypes: 'Supreme Combed Jersey, 2x1 Rib Knit, Seamless Blends',
    description: 'High-rotation essentials: long-sleeve layering tees, ribbed singlets, tank tops, and core wardrobe basics.',
    image: catBasicsImg,
    highlights: ['Zero-twist soft handfeel', 'Color fastness stability', 'Durable rib recovery']
  },
  {
    id: 'portfolio-workwear',
    name: 'Workwear & Uniforms',
    group: 'essentials',
    fabricTypes: 'Heavyweight Duck Canvas, Poly-Cotton Twill (240–340 GSM)',
    description: 'Triple-needle stitched utility trousers, carpenter pants, durable work shirts, and protective hospitality apparel.',
    image: catWorkwearImg,
    highlights: ['Triple-needle stitching', 'Bar-tacked pocket corners', 'Industrial wash tolerance']
  },
  {
    id: 'portfolio-kidswear',
    name: 'Kidswear & Babywear',
    group: 'essentials',
    fabricTypes: '100% Organic Combed Cotton, Soft Interlock, OEKO-TEX Certified Chemistries',
    description: 'Children t-shirts, sweatpants, rompers, and playwear featuring nickel-free snaps and baby-safe dyes.',
    image: catKidswearImg,
    highlights: ['Nickel-free metal snaps', 'Skin-safe dyes', 'Double-stitched bindings']
  },

  // 5. MATERIALS & DEVELOPMENT
  {
    id: 'portfolio-materials-trims',
    name: 'Materials, Trims & Accessories',
    group: 'materials',
    fabricTypes: 'Custom Buttons, Metal Zippers, Woven Brand Labels, Hangtags, Trims',
    description: 'Coordination of branded accessories: antique brass shanks, custom pullers, recycled polyester woven labels, and paper tags.',
    image: materialsTrimsImg,
    highlights: ['Custom brand engraving', 'OEKO-TEX compliant trims', 'Full trim card development']
  }
];

// -------------------------------------------------------------
// CORE SERVICES
// -------------------------------------------------------------
export const SERVICES: ServiceItem[] = [
  {
    id: 'apparel-sourcing',
    number: '01',
    title: 'Apparel Sourcing',
    shortDescription: 'Matching international buyers with qualified manufacturing partners across Bangladesh based on product type, complexity, and commercial parameters.',
    detailedScope: [
      'Comprehensive supplier capability and machinery evaluation',
      'Factory matching tailored to brand aesthetic and technical specs',
      'Mill network alignment for specialized yarn, denim, and knitted textiles'
    ],
    keyDeliverable: 'Targeted factory shortlist & initial feasibility report'
  },
  {
    id: 'product-development',
    number: '02',
    title: 'Product Development',
    shortDescription: 'Guiding prototype development, tech pack interpretation, material matching, trims customization, and pattern grading.',
    detailedScope: [
      'Tech pack evaluation and measurement specification support',
      'Fabric sourcing, lab dip color matching, and trim card sign-offs',
      'Proto, fit, and pre-production sample turnaround oversight'
    ],
    keyDeliverable: 'Approved physical counter-samples & trim cards'
  },
  {
    id: 'factory-coordination',
    number: '03',
    title: 'Factory & Supplier Coordination',
    shortDescription: 'Serving as your daily bilingual liaison on the ground in Dhaka—maintaining clear, transparent communication and alignment.',
    detailedScope: [
      'Proactive daily English communication across European and US time zones',
      'Capacity reservation, production scheduling, and lead-time monitoring',
      'Inter-facility coordination between spinning mills, dyehouses, and sewing lines'
    ],
    keyDeliverable: 'Centralized buyer-factory communication conduit'
  },
  {
    id: 'quality-control',
    number: '04',
    title: 'Quality Control & Auditing',
    shortDescription: 'Systematic in-line and end-of-line quality oversight throughout cutting, sewing, laundry processing, and final carton packing.',
    detailedScope: [
      'In-line visual inspection during cutting, stitching, and assembly',
      'Critical measurement checks, seam strength, and wash colorfastness',
      'Final Random Inspection (FRI) adhering to international AQL 1.5 / 2.5 standards'
    ],
    keyDeliverable: 'Detailed digital inspection reports with high-resolution imagery'
  },
  {
    id: 'production-follow-up',
    number: '05',
    title: 'Production Follow-Up',
    shortDescription: 'Actively tracking weekly Time & Action (T&A) milestones to anticipate potential bottlenecks and safeguard target delivery windows.',
    detailedScope: [
      'Weekly Time & Action (T&A) milestone tracking and calendar management',
      'Fabric in-house verification and cutting progress checks',
      'Early warning identification and constructive delay mitigation'
    ],
    keyDeliverable: 'Weekly transparent milestone & timeline logs'
  },
  {
    id: 'order-management',
    number: '06',
    title: 'Order Management & Logistics',
    shortDescription: 'Managing export documentation, commercial invoices, packing lists, carton labeling, and smooth freight forwarder handovers.',
    detailedScope: [
      'Export documentation verification and customs compliance',
      'Carton labeling, barcode scanning, and polybag specifications',
      'Freight forwarder liaison until clean bill of lading issuance'
    ],
    keyDeliverable: 'Complete compliant shipping documentation package'
  }
];

// -------------------------------------------------------------
// WHY BELVORIS & TRUST PILLARS
// -------------------------------------------------------------
export const WHY_BELVORIS_POINTS = [
  {
    title: 'Buyer-Focused Communication',
    description: 'Clear, proactive communication with responsive turnaround times across European, UK, and North American working hours. No communication blackouts or ambiguous status reports.'
  },
  {
    title: 'Bangladesh Sourcing Advantage',
    description: 'Direct access to one of the world’s most competitive, vertically integrated textile manufacturing ecosystems, backed by expansive spinning mills and specialized washing facilities.'
  },
  {
    title: 'End-to-End Coordination',
    description: 'We manage every intermediate stage between your design office and the final container sealing—eliminating fragmented supplier management and linguistic hurdles.'
  },
  {
    title: 'Systematic Quality Discipline',
    description: 'Rigorous oversight focused on fabric weight tolerance, shrinkage stability, color fastness, stitch neatness, and precision packaging standards aligned with international AQL standards.'
  },
  {
    title: 'Flexible Product Sourcing',
    description: 'Ability to coordinate both high-volume continuous retail programs and focused seasonal capsules across diverse denim, knit, woven, and outerwear categories.'
  },
  {
    title: 'Long-Term Business Partnerships',
    description: 'We prioritize repeatable trust, sustainable commercial integrity, and consistent year-over-year production reliability over short-term transactional gains.'
  }
];

// -------------------------------------------------------------
// LEADERSHIP
// -------------------------------------------------------------
export const LEADERSHIP: LeadershipMember[] = [
  {
    name: 'Wasiul Islam Riham',
    role: 'Managing Director',
    phone: '+880 1793 362538',
    email: 'contact@belvoris.com',
    bioNote: 'Leads international buyer relations, commercial negotiations, and overall sourcing operations across denim, knitwear, and woven production divisions.'
  },
  {
    name: 'Md Abdul Razzak',
    role: 'Chairman',
    phone: '+880 1713 961144',
    email: 'contact@belvoris.com',
    bioNote: 'Provides strategic oversight, supplier partnership governance, and long-term supply-chain capacity development in the Bangladesh textile sector.'
  }
];
