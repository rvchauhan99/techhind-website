// Central data file for all dynamic website content
// Update this file to change content across the entire website

export const siteData = {
  // Company Information
  company: {
    name: "techHind",
    shortName: "TH",
    tagline: "India's most powerful CRM platform for Solar EPC companies.",
    description:
      "techHind is a newly established company dedicated to revolutionizing how solar EPC companies manage their business operations. Our platform is designed specifically for the Indian solar market, understanding the unique challenges and opportunities in this rapidly growing industry.",
    additionalInfo:
      "We combine deep industry knowledge with modern technology to deliver a solution that truly makes a difference. Our team is committed to supporting your business growth every step of the way.",
  },

  // SEO & Metadata
  seo: {
    title: "Solar CRM for EPC Companies in India | techHind",
    description:
      "Manage solar leads, projects, and payments in one CRM built for Indian EPC companies. From lead to commissioning — residential, commercial, and ground-mounted.",
    keywords: [
      "solar CRM India",
      "CRM for solar EPC companies",
      "solar project management software India",
      "solar lead management software",
      "solar EPC software",
      "WhatsApp solar CRM",
    ],
    ogImage: "/og-image.png",
  },

  // Contact Information
  contact: {
    email: "contact@techhind.in",
    phone: "+91-8485949461",
    whatsapp: "+918485949461",
    address: "47,Ambica society, Vijapur, Gujarat, 382870, India",
    socialMedia: {
      linkedin: "https://linkedin.com/company/techhind",
      twitter: "https://twitter.com/techhind",
      facebook: "https://facebook.com/techhind",
    },
  },

  // Navigation
  navigation: {
    demoUrl: "https://demo.techhind.in/auth/preview",
    items: [
      { name: "Product", hasDropdown: true, href: "#features" },
      { name: "Resources", hasDropdown: true, href: "#faq" },
      { name: "Pricing", hasDropdown: true, href: "/pricing" },
      { name: "About Us", hasDropdown: false, href: "#about" },
      { name: "Contact", hasDropdown: false, href: "#contact" },
    ],
    ctaButtons: {
      login: "Login",
      bookDemo: "Book a Demo",
      tryDemo: "Try Live Demo",
    },
  },

  // Hero Section
  hero: {
    banner: {
      icon: "⚡",
      text: "Built for Solar EPC Companies",
    },
    headline: {
      prefix: "India's Most Powerful",
      crm: "CRM",
      middle: "for",
      industry: "Solar EPC",
      suffix: "Companies",
    },
    subheadline:
      "From Lead generation to project completion — Manage your entire solar business with one powerful, cloud-based platform designed specifically for Indian solar companies.",
    ctaButtons: {
      primary: "Get Started Today",
      secondary: "Try Live Demo",
    },
    featureHighlights: ["Residential", "Commercial", "Ground Mounted"],
    kpis: [
      { label: "Active Orders", value: "214", helper: "Live operations", trend: "up", status: "green" },
      { label: "Project Value", value: "₹368.25L", helper: "Current pipeline", trend: "up", status: "blue" },
      { label: "Active Capacity", value: "840.8 kW", helper: "Under execution", trend: "up", status: "teal" },
      { label: "Completed Orders", value: "366", helper: "This cycle", trend: "neutral", status: "blue" },
      { label: "Completed Capacity", value: "1522.6 kW", helper: "Commissioned", trend: "up", status: "green" },
      { label: "Payment Outstanding", value: "143", helper: "Needs attention", trend: "down", status: "amber" },
    ],
    pipelinePreview: [
      { stage: "Estimate", value: 93, tone: "success" },
      { stage: "Planner", value: 45, tone: "info" },
      { stage: "Delivery", value: 53, tone: "info" },
      { stage: "Fabrication", value: 22, tone: "warning" },
    ],
    energyHighlights: [
      { label: "Monthly Installed", value: "620 kW", tone: "green" },
      { label: "Subsidy Pending", value: "5", tone: "amber" },
      { label: "Netmeter Pending", value: "2", tone: "blue" },
    ],
    colorStops: {
      meshA: "rgba(255,190,92,0.28)",
      meshB: "rgba(0,130,59,0.22)",
      meshC: "rgba(27,54,93,0.22)",
    },
    badges: [
      "Startup-friendly onboarding",
      "India-first workflow design",
      "Field-ready operations"
    ],
    trustIndicators: [
      { label: "14-day free trial" },
      { label: "No credit card" },
      { label: "Cancel anytime" },
      { label: "India-first platform" },
      { label: "MNRE aligned" },
    ],
  },

  // Highlights Section (NEW)
  highlights: {
    title: "Why Solar Companies Choose techHind",
    subtitle: "Built ground-up for India's booming solar industry",
    items: [
      {
        icon: "☀️",
        stat: "India's #1",
        title: "Solar-Specific CRM",
        description:
          "The only CRM built exclusively for Solar EPC businesses — not a generic tool retrofitted for solar.",
        color: "from-[#00823b] to-[#1b365d]",
      },
      {
        icon: "🔄",
        stat: "End-to-End",
        title: "Complete Workflow",
        description:
          "From first lead to final commissioning, handle every stage in one unified platform.",
        color: "from-[#00823b] to-[#1b365d]",
      },
      {
        icon: "📱",
        stat: "100% Mobile",
        title: "Field Team Ready",
        description:
          "Your site teams can capture surveys, photos, and updates directly from the field — even offline.",
        color: "from-[#00823b] to-[#1b365d]",
      },
    ],
  },

  // Features Section
  features: {
    title: "Everything You Need to Manage Your Solar Business",
    titleHighlight: "Manage Your Solar Business",
    description:
      "A comprehensive platform designed to streamline operations and accelerate growth for solar EPC companies.",
    items: [
      {
        icon: "Users",
        title: "Lead Management",
        description:
          "Capture, track, and nurture leads from multiple sources with automated workflows and intelligent scoring.",
        subFeatures: ["Multi-source lead capture", "Automated follow-up reminders", "Lead scoring & prioritization"],
      },
      {
        icon: "FolderKanban",
        title: "Project Tracking",
        description:
          "Monitor project progress in real-time with visual dashboards, timelines, and milestone tracking.",
        subFeatures: ["Gantt timeline view", "Stage-wise milestone tracking", "Team task assignments"],
      },
      {
        icon: "Package",
        title: "Inventory Management",
        description:
          "Keep track of solar panels, inverters, and components with real-time inventory updates and alerts.",
        subFeatures: ["Real-time stock levels", "Low stock alerts", "Vendor purchase orders"],
      },
      {
        icon: "FileText",
        title: "Quotation & Proposals",
        description:
          "Generate professional, branded solar quotations with dynamic pricing in minutes — not hours.",
        subFeatures: ["One-click PDF proposals", "Dynamic component pricing", "GST-ready quotations"],
      },
      {
        icon: "BarChart3",
        title: "Analytics & Reports",
        description:
          "Comprehensive insights into sales performance, project profitability, and business metrics.",
        subFeatures: ["Sales pipeline reports", "Project profit analysis", "Custom dashboards"],
      },
      {
        icon: "Shield",
        title: "Compliance & Quality",
        description:
          "Ensure regulatory compliance and maintain quality standards throughout your projects.",
        subFeatures: ["Document checklists", "MNRE compliance tracking", "Quality audit logs"],
      },
      {
        icon: "Smartphone",
        title: "Mobile Field App",
        description:
          "Empower site engineers with a dedicated mobile app for surveys, photo uploads, and progress updates.",
        subFeatures: ["Offline capability", "Photo & document upload", "GPS site check-in"],
      },
      {
        icon: "Headphones",
        title: "After-Sales & AMC",
        description:
          "Manage service requests, AMC contracts, and customer support tickets seamlessly after project handover.",
        subFeatures: ["AMC contract tracking", "Service ticket management", "Customer portal access"],
      },
    ],
  },

  // About Section
  about: {
    title: "Why Choose techHind?",
    subtitle:
      "We're not just another CRM. We're your partner in building a more efficient and profitable solar business.",
  },

  // Why techHind (NEW)
  whyTechHind: {
    title: "techHind vs. Generic CRMs",
    subtitle: "See why solar companies switch from generic tools to techHind",
    features: [
      "Solar project lifecycle management",
      "Site survey & design tools",
      "Component & inventory tracking",
      "GST-ready quotations",
      "MNRE compliance support",
      "Mobile field team app",
      "WhatsApp & SMS lead alerts",
      "India-specific payment tracking",
      "Offline mode for remote sites",
      "Dedicated solar industry support",
    ],
  },

  // Process Flow (NEW)
  processFlow: {
    title: "How techHind Powers Your Entire Solar Business",
    subtitle: "A seamless end-to-end workflow — from first contact to happy customer",
    steps: [
      {
        number: "01",
        icon: "📋",
        title: "Lead Capture",
        description:
          "Capture inquiries from website, calls, WhatsApp, and referrals. Auto-assign to sales reps with follow-up reminders.",
        color: "from-[#00823b] to-[#1b365d]",
      },
      {
        number: "02",
        icon: "📊",
        title: "Survey & Quotation",
        description:
          "Schedule site surveys, capture rooftop measurements, and generate professional GST-ready solar proposals in minutes.",
        color: "from-[#00823b] to-[#1b365d]",
      },
      {
        number: "03",
        icon: "⚙️",
        title: "Project Execution",
        description:
          "Manage procurement, inventory allocation, installation stages, and field team tasks with real-time progress tracking.",
        color: "from-[#00823b] to-[#1b365d]",
      },
      {
        number: "04",
        icon: "✅",
        title: "Commissioning & After-Sales",
        description:
          "Complete commissioning checklists, handle DISCOM approvals, and manage AMC/service contracts for ongoing revenue.",
        color: "from-[#00823b] to-[#1b365d]",
      },
    ],
  },

  // Testimonials (kept for future enablement; currently hidden on homepage)
  testimonials: {
    title: "Trusted by Leading Solar EPC Companies Across India",
    description:
      "We proudly support EPC companies, manufacturers, and service providers from every corner of the solar industry.",
    items: [
      {
        name: "Rajesh Patel",
        company: "SunPower EPC Pvt. Ltd.",
        role: "Managing Director",
        content:
          "techHind has completely transformed how we manage our projects. We went from chaotic WhatsApp groups to a streamlined system. Our team saves 3-4 hours every single day.",
        rating: 5,
        initials: "RP",
        location: "Ahmedabad, Gujarat",
      },
      {
        name: "Priya Sharma",
        company: "GreenVolt Solar Solutions",
        role: "Operations Head",
        content:
          "The quotation module alone was worth the switch. We now generate professional proposals in under 5 minutes and our close rate has improved by over 30% since using techHind.",
        rating: 5,
        initials: "PS",
        location: "Jaipur, Rajasthan",
      },
      {
        name: "Amit Desai",
        company: "Surya EPC India",
        role: "Project Director",
        content:
          "Finally a CRM that understands solar! The inventory tracking and field team mobile app are game changers for us. Our site engineers love the offline mode.",
        rating: 5,
        initials: "AD",
        location: "Surat, Gujarat",
      },
    ],
  },

  // FAQ (NEW)
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about techHind",
    items: [
      {
        question: "Is techHind built specifically for solar companies?",
        answer:
          "Yes! techHind is built exclusively for Solar EPC companies in India. Unlike generic CRMs, every feature — from lead management to commissioning checklists — is designed around the solar project lifecycle.",
      },
      {
        question: "Can my field engineers use techHind on mobile?",
        answer:
          "Absolutely. techHind has a dedicated mobile app for field teams. Site engineers can capture survey data, upload photos, update project stages, and check in to job sites — even without an internet connection.",
      },
      {
        question: "Does techHind generate GST-compliant quotations?",
        answer:
          "Yes. The quotation module is fully GST-ready. You can configure component pricing, add GST rates, include subsidy details, and generate branded PDF proposals in minutes.",
      },
      {
        question: "How long does it take to get started?",
        answer:
          "Most teams are fully onboarded within 1-2 days. We provide guided setup, data import assistance, and hands-on training for your team. You can also start with a 14-day free trial with no credit card required.",
      },
      {
        question: "Can techHind handle multiple branches or teams?",
        answer:
          "Yes. techHind supports multi-branch structures with role-based access control. You can have different team members access specific projects, regions, or departments based on their role.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Data security is our top priority. techHind uses encrypted data storage, secure HTTPS connections, regular backups, and role-based access permissions to ensure your business data is always protected.",
      },
      {
        question: "Does techHind integrate with WhatsApp or other tools?",
        answer:
          "Yes. techHind provides WhatsApp notifications for new leads, follow-up reminders, and project updates. We also offer API integrations for connecting with your existing tools.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer email support, live chat, phone support, and dedicated onboarding assistance. Our support team has deep knowledge of the solar industry and can help with both technical and business process questions.",
      },
    ],
  },

  // Contact Section
  contactSection: {
    title: "Get in Touch",
    subtitle:
      "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },

  // Stats Section
  stats: {
    title: "Trusted by Solar EPC Companies Across India",
    items: [
      { value: "500", suffix: "+", label: "Active Projects", icon: "📊" },
      { value: "50", suffix: "+", label: "EPC Companies", icon: "🏢" },
      { value: "95", suffix: "%", label: "Customer Satisfaction", icon: "⭐" },
      { value: "40", suffix: "%", label: "Time Saved", icon: "⚡" },
    ],
  },

  // Value Proposition
  valueProposition: {
    title: "Transform Your Solar Business Operations",
    subtitle: "See measurable results in weeks, not months",
    benefits: [
      {
        title: "Reduce Project Delays",
        description: "Cut project completion time by up to 40% with real-time tracking and automated workflows",
        icon: "⏱️",
      },
      {
        title: "Increase Revenue",
        description: "Close 30% more deals with intelligent lead management and automated follow-ups",
        icon: "💰",
      },
      {
        title: "Improve Efficiency",
        description: "Eliminate manual data entry and reduce administrative overhead by 60%",
        icon: "🚀",
      },
      {
        title: "Better Decision Making",
        description: "Make data-driven decisions with comprehensive analytics and real-time insights",
        icon: "📈",
      },
    ],
  },

  // Social Proof (kept for future enablement; currently hidden on homepage)
  socialProof: {
    title: "Trusted by Leading Solar Companies",
    logos: [
      { name: "SunPower EPC", placeholder: "SEPC" },
      { name: "GreenVolt Solar", placeholder: "GVS" },
      { name: "Surya EPC India", placeholder: "SEI" },
      { name: "SolarTech Gujarat", placeholder: "STG" },
      { name: "RenewMax Energy", placeholder: "RME" },
      { name: "BrightSun EPC", placeholder: "BSE" },
      { name: "EcoSolar India", placeholder: "ESI" },
      { name: "SunRise Power", placeholder: "SRP" },
    ],
  },

  // Use Cases
  useCases: {
    title: "Built for Every Solar Business Need",
    subtitle: "Whether you're a startup or enterprise, techHind scales with you",
    cases: [
      {
        title: "Small EPC Companies",
        description: "Start managing up to 50 projects efficiently with our Starter plan",
        features: ["Basic lead management", "Project tracking", "Mobile access"],
      },
      {
        title: "Growing Businesses",
        description: "Scale operations with unlimited projects and advanced features",
        features: ["Advanced analytics", "Team collaboration", "Custom integrations"],
      },
      {
        title: "Enterprise Organizations",
        description: "Enterprise-grade solution with dedicated support and custom development",
        features: ["Dedicated account manager", "Custom features", "On-premise option"],
      },
    ],
  },

  // Footer
  footer: {
    links: {
      product: [
        { name: "Features", href: "/#features" },
        { name: "Pricing", href: "/pricing" },
      ],
      company: [
        { name: "About Us", href: "/#about" },
        { name: "Contact", href: "/#contact" },
      ],
      resources: [{ name: "FAQ", href: "/#faq" }],
      legal: ["Privacy Policy", "Terms & Conditions", "Data Deletion Instructions"],
    },
  },
};