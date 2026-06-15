export type NavigationItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  image: string;
  shortform: string;
  blurb: string;
  description: string;
  deliverables: string[];
  applications: string[];
};

export type ProductGroup = {
  title: string;
  intro: string;
  items: string[];
};

export type Industry = {
  name: string;
  iconName: string;
  description: string;
};

export const companyInfo = {
  name: "Metal Matrix Equipment",
  phone: "+971 545392207",
  email: "info@metalmatrixequipment.com",
  addressLines: [
    "Office 208, Gulf Business Centre",
    "Al Quoz Industrial Area 3",
    "Dubai, United Arab Emirates",
  ],
  topBanner:
    "Industrial fabrication, machining, and engineered equipment support for high-specification projects.",
  heroTitle: "Industrial Fabrication Engineered for Demanding Execution",
  heroDescription:
    "Metal Matrix Equipment brings together fabrication discipline, machining capability, and systems-oriented thinking for clients who expect precision, responsiveness, and dependable delivery.",
  aboutIntro:
    "Metal Matrix Equipment is positioned as a fabrication and engineering partner for industrial clients that value execution clarity as much as production capability.",
  aboutBody:
    "Our approach is built around technical understanding, disciplined coordination, and workmanship that reflects the standards of the projects we support. We focus on practical engineering, fabrication readiness, and output quality that helps clients move from requirement to installation with confidence.",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = ["/infra/9.jpeg", "/infra/11.jpeg", "/infra/12.jpeg"];

export const heroPillars = [
  "Precision-led fabrication",
  "Industrial-grade machining",
  "Structured project coordination",
];

export const services: Service[] = [
  {
    title: "Steel Structural Fabrication Works",
    image: "/services/ssfw.jpeg",
    shortform: "ssfw",
    blurb:
      "Primary and secondary steel packages fabricated with the control, fit-up quality, and finish demanded by industrial and infrastructure applications.",
    description:
      "We support structural steel requirements with a fabrication-first mindset that prioritizes dimensional control, fabrication sequencing, and site-readiness. From support frames and equipment structures to platforms, skids, and custom steel assemblies, every scope is approached with attention to constructability and execution detail.",
    deliverables: [
      "Equipment support structures and heavy-duty frames",
      "Platforms, access systems, stairways, and secondary steel",
      "Custom skids, bases, and fabrication packages",
      "Fit-up, finishing, and dispatch coordination",
    ],
    applications: [
      "Industrial utilities and plant environments",
      "Process support structures and fabricated assemblies",
      "Infrastructure-oriented steel packages",
    ],
  },
  {
    title: "Stainless Steel Pipe Fabrication Works",
    image: "/services/sspfw.jpeg",
    shortform: "sspfw",
    blurb:
      "Fabricated stainless steel piping assemblies designed for clean execution, reliable fit-up, and demanding operating environments.",
    description:
      "Our stainless steel pipe fabrication scope is tailored for projects that require controlled workmanship, clean welding standards, and dependable assembly quality. We support spool fabrication, fittings integration, and custom pipe-based assemblies with a strong focus on dimensional accuracy and finish consistency.",
    deliverables: [
      "Pipe spools, manifolds, and custom routing assemblies",
      "Integrated fittings, supports, and fabricated accessories",
      "Workshop-based fabrication for controlled production quality",
      "Preparation for efficient site installation or handover",
    ],
    applications: [
      "Process piping systems",
      "Utility lines and specialist stainless assemblies",
      "Projects requiring corrosion-conscious fabrication",
    ],
  },
  {
    title: "Aluminium Fabrication Works",
    image: "/services/afw.jpeg",
    shortform: "afw",
    blurb:
      "Lightweight fabricated aluminium solutions where finish quality, practicality, and clean detailing matter.",
    description:
      "For aluminium fabrication requirements, we focus on achieving the right balance between structural intent, clean aesthetics, and production efficiency. This allows us to support bespoke enclosures, lightweight assemblies, panels, and custom engineered pieces with a refined fabrication standard.",
    deliverables: [
      "Fabricated aluminium assemblies and custom panels",
      "Lightweight frames, covers, and ancillary components",
      "Workshop fabrication with careful handling and finishing",
      "Design-conscious production for visible applications",
    ],
    applications: [
      "Architectural and equipment-related metalwork",
      "Custom industrial covers and housings",
      "Projects requiring lighter fabricated components",
    ],
  },
  {
    title: "Machining Works",
    image: "/services/mw.jpeg",
    shortform: "mw",
    blurb:
      "Precision machining support for custom components, production parts, and fabrication-linked engineering requirements.",
    description:
      "Our machining scope is built to complement fabrication and equipment support requirements where dimensional accuracy and repeatability are critical. Whether the requirement is a single custom component or a batch of machined parts, the emphasis remains on precision, specification alignment, and dependable output.",
    deliverables: [
      "Custom machined components and precision parts",
      "Fabrication support parts, adapters, and repair items",
      "Small-batch and repeat machining requirements",
      "Specification-focused dimensional control",
    ],
    applications: [
      "Equipment maintenance and replacement components",
      "Custom fabrication-linked machining packages",
      "Projects with tight tolerance requirements",
    ],
  },
  {
    title: "Conveying System Works",
    image: "/services/csw.png",
    shortform: "csw",
    blurb:
      "Fabricated components and supporting assemblies for conveying systems where reliability, maintainability, and execution discipline are essential.",
    description:
      "We support conveying-related requirements through fabricated assemblies, structural support elements, and system-oriented components shaped around the realities of industrial handling applications. The priority is to deliver packages that are practical to integrate, maintain, and operate in demanding conditions.",
    deliverables: [
      "Conveying line support structures and fabricated modules",
      "Custom housings, transitions, and ancillary components",
      "Integrated fabrication for material handling applications",
      "Execution support for system-oriented packages",
    ],
    applications: [
      "Conveying and material handling environments",
      "Plant support systems and auxiliary fabrication scopes",
      "Industrial projects requiring coordinated assemblies",
    ],
  },
];

export const productGroups: ProductGroup[] = [
  {
    title: "Heavy Engineering Products",
    intro:
      "Fabricated equipment and engineered assemblies designed for industrial duty, integration flexibility, and dependable performance.",
    items: [
      "Chain and belt bucket elevators",
      "Pressure vessels",
      "Cement plant components",
      "Special purpose machinery",
      "Storage tanks and silos",
      "Dampers",
      "Jet pulse filters",
      "Ducts and casings",
      "Industrial chimneys",
      "ESP panels",
      "Chutes and spouts",
      "Scrubbers",
    ],
  },
  {
    title: "Structural Steel Products",
    intro:
      "Execution-ready structural packages for industrial, infrastructure, and support applications with a strong emphasis on fabrication practicality.",
    items: [
      "Pre-engineered buildings",
      "Supporting structures",
      "Built-up columns and beams",
      "Conveyor galleries",
      "Conveyor structures",
      "Transformer towers",
      "Pipe racks",
      "Signalling towers",
      "Steel bridge structures",
      "Precast mould structures",
      "Cement and power plant structures",
      "Ladders and gangways",
      "Platforms and gratings",
    ],
  },
];

export const industries: Industry[] = [
  {
    name: "Power & Utilities",
    iconName: "zap",
    description:
      "Fabrication support for plant infrastructure, equipment bases, and utility-oriented industrial packages.",
  },
  {
    name: "Cement & Minerals",
    iconName: "factory",
    description:
      "Durable fabricated assemblies and handling-related packages built for abrasive, high-duty operating conditions.",
  },
  {
    name: "Infrastructure",
    iconName: "bridge",
    description:
      "Structural steel and engineered fabrication for projects where scale, coordination, and delivery discipline are critical.",
  },
  {
    name: "Manufacturing",
    iconName: "building",
    description:
      "Custom supports, frames, housings, and fabrication packages aligned to operational and production needs.",
  },
  {
    name: "Transport & Logistics",
    iconName: "train",
    description:
      "Engineered metalwork and support structures for facilities that depend on robust, maintainable hardware.",
  },
  {
    name: "Petrochemical Support",
    iconName: "radiation",
    description:
      "Specialist fabrication scopes where material suitability, shop discipline, and detail accuracy matter.",
  },
];

export const differentiators = [
  {
    title: "Execution Clarity",
    text: "We shape every requirement around practical production planning, technical alignment, and disciplined coordination.",
  },
  {
    title: "Quality of Finish",
    text: "From fit-up to handover, the objective is to deliver output that reflects precision, consistency, and professional standards.",
  },
  {
    title: "Industrial Responsiveness",
    text: "We understand that industrial timelines move quickly, so communication, prioritization, and follow-through stay central to delivery.",
  },
];

export const missionVisionValues = [
  {
    title: "Mission",
    text: "To deliver fabrication and engineered equipment support with the technical care, production discipline, and responsiveness that serious industrial projects demand.",
  },
  {
    title: "Vision",
    text: "To be recognized as a trusted premium partner for fabrication, machining, and systems-oriented industrial solutions across demanding sectors.",
  },
  {
    title: "Values",
    text: "Precision in execution, clarity in communication, accountability in delivery, and respect for the standards our clients work hard to protect.",
  },
];

export const operatingPrinciples = [
  "Clear scope understanding before production begins",
  "Thoughtful planning that supports shop efficiency and on-site readiness",
  "Attention to dimensional accuracy, finish quality, and practical usability",
  "Professional communication throughout the project lifecycle",
  "A consistent focus on reliability, safety-conscious execution, and accountability",
];

export const serviceFaqs = [
  {
    question:
      "What kind of enquiries are best suited to Metal Matrix Equipment?",
    answer:
      "Projects that require custom fabrication, machining, conveying-related assemblies, or engineering-driven metalwork are the strongest fit. The team is best positioned where clarity, quality, and disciplined execution matter as much as output quantity.",
  },
  {
    question:
      "Can you support custom fabrication requirements rather than only standard items?",
    answer:
      "Yes. The service model is geared toward project-specific scopes, custom assemblies, and fabrication packages developed around the client requirement rather than a fixed catalogue approach.",
  },
  {
    question: "Do you handle both structural and equipment-oriented metalwork?",
    answer:
      "Yes. The scope is structured to support both structural fabrication requirements and equipment-related assemblies, including machining-linked packages and conveying system components.",
  },
  {
    question: "How do you approach quality and fabrication control?",
    answer:
      "The working approach focuses on specification alignment, dimensional attention, fabrication discipline, and clean coordination throughout the production cycle so that the final handover is dependable and installation-ready.",
  },
  {
    question:
      "Can services be tailored to different industries or project conditions?",
    answer:
      "Yes. Requirements vary widely from one facility or sector to another, so each scope is reviewed in context and shaped around the operating environment, material expectations, and functional priorities of the project.",
  },
  {
    question: "How can we initiate an enquiry?",
    answer:
      "You can begin by sharing your requirement, drawing package, or scope summary through the contact page, phone number, or email. From there, the discussion can move into technical review, commercial alignment, and execution planning.",
  },
];
