/** Distilled from platform-handbook/ for website, SEO, and AEO */

export const platformDifferentiators = [
  "Complete solar lifecycle in one system — sales, operations, and finance",
  "Built for Indian solar EPC — DISCOM, subsidy docs, panel/inverter serial tracking",
  "Role-based workspaces with approval workflows and audit trails",
  "Professional documents — quotation PDFs, challans, B2B invoices, warranty cards",
  "Meta Lead Ads integration — Facebook and Instagram leads sync automatically",
  "B2B dealer quotes, orders, shipments, and invoicing",
  "Commission management with approval and payout tracking",
  "Serialized inventory for panels and inverters",
  "Service tickets and warranty claims with traceability",
  "Dashboards, KPIs, and management reports",
] as const;

export const platformModules = [
  {
    icon: "Megaphone",
    title: "Marketing Leads & Meta",
    description:
      "Capture digital leads on a visual kanban pipeline with Meta Lead Ads sync, bulk import, and assignment to sales executives.",
    subFeatures: ["Meta Lead Ads sync", "Kanban lead pipeline", "Bulk CSV import", "Campaign source tracking"],
    slug: "solar-lead-management",
  },
  {
    icon: "Search",
    title: "Inquiry Management",
    description:
      "Convert qualified leads to inquiries with customer details, capacity, location, DISCOM, and site visit scheduling.",
    subFeatures: ["Lead-to-inquiry conversion", "Site visit scheduling", "DISCOM & capacity tracking", "Pipeline kanban"],
    slug: "solar-lead-management",
  },
  {
    icon: "FileText",
    title: "Quotations",
    description:
      "Create GST-ready solar quotations from inquiries with dynamic pricing, manager approval, and branded PDF output.",
    subFeatures: ["GST-ready PDF proposals", "Manager approval workflow", "Quotation templates", "One-click from inquiry"],
    slug: "solar-quotation-software",
  },
  {
    icon: "ShoppingCart",
    title: "Order Lifecycle",
    description:
      "Manage orders from quotation conversion through confirmation, amendments, document collection, and payment schedules.",
    subFeatures: ["Quotation-to-order conversion", "Order confirmation pipeline", "Document collection", "Stock reservation"],
    slug: "solar-order-management",
  },
  {
    icon: "Wrench",
    title: "Fabrication & Installation",
    description:
      "Track fabrication, field installation with serial capture, manager sign-off, and delivery challan dispatch.",
    subFeatures: ["Installation approval workflow", "Serial number capture", "Delivery challans", "Manager sign-off"],
    slug: "solar-order-management",
  },
  {
    icon: "Wallet",
    title: "Payments & Outstanding",
    description:
      "Record customer payments, track outstanding balances, payment audits, and follow-up reminders across all orders.",
    subFeatures: ["Payment recording & audit", "Outstanding tracking", "Follow-up reminders", "Receipt generation"],
    slug: "solar-payment-tracking",
  },
  {
    icon: "Package",
    title: "Procurement & Inventory",
    description:
      "Manage purchase orders, goods receipt, stock levels, serial tracking, and warehouse transfers for solar components.",
    subFeatures: ["Purchase orders", "PO inward & serial capture", "Stock levels by warehouse", "Stock transfers"],
    slug: "solar-inventory-software",
  },
  {
    icon: "Building2",
    title: "B2B Trading",
    description:
      "Handle dealer quotes, sales orders, shipments, invoices, and payment outstanding for B2B solar distribution.",
    subFeatures: ["Dealer sales quotes", "B2B orders & shipments", "Invoice generation", "B2B payment tracking"],
    slug: "b2b-solar-trading",
  },
  {
    icon: "Percent",
    title: "Commission Management",
    description:
      "Configure commission rates, track accruals per order, manager review, and settlement payouts for partners.",
    subFeatures: ["Commission rate setup", "Accrual tracking", "Approval workflow", "Payout settlement"],
    slug: "solar-order-management",
  },
  {
    icon: "Headphones",
    title: "Service & Warranty",
    description:
      "Manage after-sales service tickets, warranty claims, spare parts requests, and customer support post-installation.",
    subFeatures: ["Service ticket management", "Warranty claims", "Spare parts tracking", "Service billing"],
    slug: "solar-service-warranty",
  },
  {
    icon: "BarChart3",
    title: "Reports & Audit",
    description:
      "Access dashboards, payment reports, delivery reports, B2B analytics, and full document audit trails.",
    subFeatures: ["Management dashboards", "Payment & delivery reports", "B2B analytics", "Document audit log"],
    slug: null,
  },
  {
    icon: "FileOutput",
    title: "Document Outputs",
    description:
      "Generate branded quotation PDFs, order documents, delivery challans, B2B invoices, receipts, and warranty cards.",
    subFeatures: ["Quotation PDFs", "Delivery challans", "B2B invoices", "Warranty cards"],
    slug: "solar-quotation-software",
  },
] as const;

export const platformWorkflow = {
  title: "How techHind Powers Your Entire Solar Business",
  subtitle:
    "The complete B2C journey — from marketing lead to installed project, payment collection, and after-sales service",
  steps: [
    {
      number: "01",
      icon: "📋",
      title: "Lead Capture",
      module: "Marketing Leads & Meta",
      description:
        "Leads arrive via Meta campaigns, CSV import, or manual entry with source and campaign attribution.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "02",
      icon: "🔍",
      title: "Inquiry Qualification",
      module: "Inquiry Management",
      description:
        "Convert qualified leads to inquiries with customer details, capacity, location, and DISCOM information.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "03",
      icon: "📍",
      title: "Site Assessment",
      module: "Follow-up & Site Visit",
      description:
        "Schedule follow-ups, conduct on-site surveys, attach documents, and qualify the opportunity technically.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "04",
      icon: "📄",
      title: "Commercial Proposal",
      module: "Quotations",
      description:
        "Create GST-ready quotations from inquiries, apply pricing, get manager approval, and share PDF with customer.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "05",
      icon: "✅",
      title: "Order Confirmation",
      module: "Order Lifecycle",
      description:
        "Convert approved quotation to order, collect documents, confirm with stock reservation and payment schedule.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "06",
      icon: "⚙️",
      title: "Field Execution",
      module: "Fabrication & Installation",
      description:
        "Fabricate, install with serial capture, obtain manager approval, and dispatch delivery challan.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "07",
      icon: "💰",
      title: "Financial Closure",
      module: "Payments & Commission",
      description:
        "Record payments, clear outstanding balances, and process commission accrual and settlement.",
      color: "from-[#00823b] to-[#1b365d]",
    },
    {
      number: "08",
      icon: "🛠️",
      title: "After-Sales Service",
      module: "Service & Warranty",
      description:
        "Handle service tickets and warranty claims with full traceability to installed serial numbers.",
      color: "from-[#00823b] to-[#1b365d]",
    },
  ],
} as const;

export const platformFaqs = [
  {
    question: "Does techHind support Meta (Facebook/Instagram) Lead Ads?",
    answer:
      "Yes. techHind Solar CRM integrates with Meta Lead Ads so campaign leads from Facebook and Instagram flow directly into your marketing lead pipeline with source tracking, assignment, and follow-up — no manual CSV downloads required.",
  },
  {
    question: "Can I track solar panel and inverter serial numbers?",
    answer:
      "Yes. techHind supports serialized inventory tracking. Serial numbers are registered at goods receipt and linked to orders, installations, and warranty claims for full component traceability.",
  },
  {
    question: "Does techHind handle B2B dealer orders and invoicing?",
    answer:
      "Yes. The B2B Trading module covers dealer quotes, sales orders, shipments, invoices, and payment outstanding — alongside your residential and commercial EPC project workflow in the same platform.",
  },
  {
    question: "What documents can techHind generate?",
    answer:
      "techHind generates branded quotation PDFs, order documents, delivery challans, B2B invoices, payment receipts, and warranty cards — ready to share with customers and partners.",
  },
  {
    question: "Does techHind manage commission for sales partners?",
    answer:
      "Yes. Commission Management lets you configure rates, track accruals per order, route through manager approval, and settle payouts — integrated with the order and payment lifecycle.",
  },
] as const;

export const platformShowcase = [
  {
    src: "/platform/dashboard-home.png",
    alt: "Executive solar CRM dashboard with KPIs, pipeline, and order activity in techHind",
    title: "Executive Dashboard",
    description:
      "Real-time KPIs, sales pipeline health, and order activity — a single view for leadership and sales managers.",
  },
  {
    src: "/platform/payment-outstanding.png",
    alt: "Collections and outstanding receivables dashboard with KPI summary in techHind",
    title: "Collections Dashboard",
    description:
      "Monitor receivables, collection follow-ups, and payment approvals with finance-ready KPI summaries.",
  },
  {
    src: "/platform/service-dashboard.png",
    alt: "Service operations dashboard with workload KPIs in techHind after-sales module",
    title: "Service Operations",
    description:
      "Operations dashboard for service workload, ticket status, and after-sales support visibility.",
  },
  {
    src: "/platform/reports-payments.png",
    alt: "B2C payments management report for finance review in techHind Solar CRM",
    title: "Payments Report",
    description:
      "Standardized payments report for collection analysis and finance review across all projects.",
  },
  {
    src: "/platform/stocks.png",
    alt: "Solar stock dashboard with warehouse levels and stock analytics in techHind",
    title: "Stock Dashboard",
    description:
      "Real-time stock levels by warehouse and product — panels, inverters, and components at a glance.",
  },
  {
    src: "/platform/reports-b2b-so-lines.png",
    alt: "B2B solar sales order lines analytics report in techHind CRM",
    title: "B2B Sales Report",
    description:
      "B2B order-line analytics for dealer sales — quotes, orders, and distribution performance.",
  },
] as const;

export const handbookPdfUrl = "/TechHind-Solar-CRM-Handbook.pdf";
