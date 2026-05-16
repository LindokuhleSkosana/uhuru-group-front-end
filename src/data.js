import {
  Award,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  Eye,
  Factory,
  Globe,
  GraduationCap,
  HardHat,
  Handshake,
  Landmark,
  Mail,
  MapPin,
  Phone,
  PlugZap,
  Settings,
  ShieldCheck,
  Sprout,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";

export const mvv = [
  {
    icon: Target,
    title: "OUR MISSION",
    text: "To provide sustainable, reliable and cost-effective solutions that create lasting value for our clients, partners and communities.",
  },
  {
    icon: Eye,
    title: "OUR VISION",
    text: "To be a leading African infrastructure and enterprise development group recognised for operational excellence, transformation and sustainable growth.",
  },
  {
    icon: UsersRound,
    title: "OUR VALUES",
    text: "Integrity. Excellence. Collaboration. Innovation. Sustainability.",
  },
];

export const companyTabs = [
  {
    id: "about",
    icon: UsersRound,
    name: "ABOUT US",
    suffix: "",
    title: "ABOUT US",
    paragraphs: [
      "Uhuru Group is a South African holding company operating across infrastructure, property, enterprise development and strategic partnerships.",
      "Our purpose is to connect capability, opportunity and investment to deliver sustainable solutions that drive economic participation and long-term value creation.",
    ],
    cta: "READ MORE",
    details: mvv,
  },
  {
    id: "trading",
    icon: HardHat,
    name: "UHURU TRADING 2004",
    suffix: "(PTY) LTD",
    title: "UHURU TRADING 2004 (PTY) LTD",
    paragraphs: [
      "Uhuru Trading 2004 provides integrated property maintenance, facilities management and construction support for corporate, retail and institutional environments.",
      "The business is built for practical delivery, responsive teams and consistent service standards across planned and reactive work.",
    ],
    cta: "DISCUSS A PROJECT",
    details: [
      {
        icon: Wrench,
        title: "CORE SERVICES",
        text: "Planned maintenance, reactive call-outs, facilities support and general building works.",
      },
      {
        icon: ClipboardCheck,
        title: "DELIVERY FOCUS",
        text: "Reliable coordination, quality oversight and reduced operational downtime for clients.",
      },
      {
        icon: ShieldCheck,
        title: "OPERATING STANDARD",
        text: "Work delivered with safety, accountability and clear communication from start to finish.",
      },
    ],
  },
  {
    id: "top-building",
    icon: Factory,
    name: "TOP BUILDING",
    suffix: "(PTY) LTD",
    title: "TOP BUILDING (PTY) LTD",
    paragraphs: [
      "Top Building delivers construction, refurbishment and building works for commercial, residential and institutional projects.",
      "The company supports clients who need disciplined project execution, trade coordination and quality-driven site delivery.",
    ],
    cta: "VIEW CAPABILITY",
    details: [
      {
        icon: HardHat,
        title: "BUILDING WORKS",
        text: "Renovations, refurbishments, fit-outs and general construction requirements.",
      },
      {
        icon: Settings,
        title: "PROJECT CONTROL",
        text: "Structured planning, scheduling and coordination across multi-disciplinary workstreams.",
      },
      {
        icon: BadgeCheck,
        title: "QUALITY OUTCOMES",
        text: "Execution focused on durability, compliance and professional finish quality.",
      },
    ],
  },
  {
    id: "investments",
    icon: Building2,
    name: "TOP BUILDING INVESTMENTS",
    suffix: "(PTY) LTD",
    title: "TOP BUILDING INVESTMENTS (PTY) LTD",
    paragraphs: [
      "Top Building Investments focuses on property investment, redevelopment and long-term asset value creation.",
      "The business identifies opportunities where operational insight, capital and development capability can unlock sustainable property value.",
    ],
    cta: "EXPLORE INVESTMENT",
    details: [
      {
        icon: Landmark,
        title: "PROPERTY STRATEGY",
        text: "Targeted acquisition, repositioning and redevelopment across selected property sectors.",
      },
      {
        icon: Building2,
        title: "ASSET VALUE",
        text: "Practical improvements that support stronger utilisation, resilience and long-term returns.",
      },
      {
        icon: CircleDollarSign,
        title: "PARTNERSHIP MODEL",
        text: "Investment thinking aligned with operational capability and responsible growth.",
      },
    ],
  },
  {
    id: "consortium",
    icon: Handshake,
    name: "UHURU CONSORTIUM",
    suffix: "(PTY) LTD",
    title: "UHURU CONSORTIUM (PTY) LTD",
    paragraphs: [
      "Uhuru Consortium is the group's partnership platform for joint ventures, strategic collaborations and infrastructure project participation.",
      "It creates a structured route for investors, operators, public partners and communities to participate in scalable delivery opportunities.",
    ],
    cta: "PARTNER WITH US",
    details: [
      {
        icon: Handshake,
        title: "JOINT VENTURES",
        text: "Structured collaboration for project delivery, procurement and specialist capability.",
      },
      {
        icon: UsersRound,
        title: "STAKEHOLDER ALIGNMENT",
        text: "Partnerships shaped around clear roles, shared accountability and long-term value.",
      },
      {
        icon: Sprout,
        title: "SUSTAINABLE GROWTH",
        text: "Solutions designed to support business, community and transformation outcomes.",
      },
    ],
  },
  {
    id: "academy",
    icon: GraduationCap,
    name: "UHURU ACADEMY",
    suffix: "NPC",
    title: "UHURU ACADEMY NPC",
    paragraphs: [
      "Uhuru Academy is the group's artisan development and enterprise readiness platform.",
      "It supports skills development, operational discipline and commercially capable participation in the infrastructure and property economy.",
    ],
    cta: "SUPPORT THE ACADEMY",
    details: [
      {
        icon: GraduationCap,
        title: "SKILLS DEVELOPMENT",
        text: "Practical learning pathways for artisans, teams and emerging service providers.",
      },
      {
        icon: Sprout,
        title: "ENTERPRISE READINESS",
        text: "Support that helps participants move from training into sustainable commercial work.",
      },
      {
        icon: BadgeCheck,
        title: "IMPACT FOCUS",
        text: "Development linked to employability, procurement participation and community value.",
      },
    ],
  },
];

export const services = [
  { icon: Building2, title: "Facilities Management", text: "Integrated FM solutions that support operational continuity across corporate and retail environments." },
  { icon: HardHat, title: "Construction Services", text: "Renovations, refurbishments and general building works for commercial and institutional clients." },
  { icon: Wrench, title: "Property Maintenance", text: "Planned, preventative and reactive maintenance that protects assets and reduces downtime." },
  { icon: PlugZap, title: "Electrical & Plumbing", text: "Technical trades delivered with quality, compliance and safety as the operating standard." },
  { icon: ClipboardCheck, title: "Project Management", text: "Structured project planning, coordination, quality oversight and stakeholder communication." },
  { icon: Landmark, title: "Property Investment", text: "Strategic property acquisition, redevelopment and selected sector investment opportunities." },
  { icon: Sprout, title: "Enterprise Development", text: "Artisan development and enterprise readiness that expands economic participation." },
  { icon: Handshake, title: "Joint Venture Solutions", text: "Partnership-led delivery for infrastructure, construction and strategic development projects." },
];

export const impactPoints = [
  "Transformation-aligned operations",
  "Skills development and artisan enablement",
  "Community participation and local procurement",
  "Operational excellence as a delivery standard",
  "Responsible and ethical business conduct",
];

export const metrics = [
  { icon: Award, figure: "10+", label: "YEARS", sublabel: "Operational Experience" },
  { icon: UsersRound, figure: "100+", label: "DEPLOYABLE", sublabel: "WORKFORCE CAPACITY" },
  { icon: Award, figure: "LEVEL 1", label: "B-BBEE", sublabel: "CONTRIBUTOR" },
  { icon: Settings, figure: null, label: "MULTI-DISCIPLINARY", sublabel: "SERVICE CAPABILITY" },
  { icon: Building2, figure: null, label: "CORPORATE & RETAIL", sublabel: "CLIENT EXPOSURE" },
];

export const contactDetails = [
  { icon: Phone, label: "081 461 6953", href: "tel:+27814616953" },
  { icon: Mail, label: "info@uhurugroup.co.za", href: "mailto:info@uhurugroup.co.za" },
  {
    icon: MapPin,
    label: "45 Tambotie Avenue, Pretoria, South Africa, 0184",
    href: "https://maps.google.com/?q=45+Tambotie+Avenue%2C+Pretoria%2C+South+Africa%2C+0184",
  },
  { icon: Globe, label: "www.uhurugroup.co.za", href: "https://www.uhurugroup.co.za/" },
];
