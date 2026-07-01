export type PlatformFeature = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  summary: string;
  businessPurpose: string;
  capabilities: string[];
  howItWorks: string[];
  screenshots: { src: string; alt: string }[];
  relatedSlugs: string[];
};

export const platformFeatures: PlatformFeature[] = [
  {
    slug: "solar-lead-management",
    title: "Solar Lead Management & Meta Integration",
    metaTitle: "Solar Lead Management Software India | Meta Lead Ads CRM",
    metaDescription:
      "Capture and qualify solar leads with kanban pipeline, Meta Facebook Instagram Lead Ads sync, bulk import, and assignment — built for Indian EPC companies.",
    keywords: [
      "solar lead management software India",
      "Meta lead ads solar CRM",
      "solar lead CRM",
      "Facebook leads solar EPC",
    ],
    headline: "Solar Lead Management & Meta Lead Ads",
    summary:
      "Capture digital marketing leads before they enter your formal sales pipeline. Meta Lead Ads integration brings Facebook and Instagram campaign leads directly into techHind with source tracking and assignment.",
    businessPurpose:
      "Qualify and nurture marketing leads from digital campaigns, referrals, and bulk imports before converting them to formal sales inquiries.",
    capabilities: [
      "Visual kanban pipeline for marketing leads by stage",
      "Meta Lead Ads automatic sync from Facebook and Instagram",
      "Lead detail with call history and campaign source",
      "Assign leads to sales executives",
      "Bulk import from spreadsheets",
      "Convert qualified leads to inquiries",
    ],
    howItWorks: [
      "Lead arrives from Meta campaign, CSV upload, or manual entry",
      "Team qualifies and records follow-up calls on the kanban board",
      "Qualified lead converts to an Inquiry in the sales pipeline",
    ],
    screenshots: [
      {
        src: "/platform/marketing-leads-kanban.png",
        alt: "Solar marketing leads kanban pipeline in techHind CRM",
      },
    ],
    relatedSlugs: ["solar-quotation-software", "solar-order-management"],
  },
  {
    slug: "solar-quotation-software",
    title: "Solar Quotation Software",
    metaTitle: "Solar Quotation Software India | GST-Ready Proposals",
    metaDescription:
      "Generate GST-ready solar quotation PDFs with dynamic pricing, manager approval, and branded templates. Built for Indian solar EPC companies.",
    keywords: [
      "solar quotation software India",
      "GST solar quotation",
      "solar proposal software",
      "solar EPC quotation PDF",
    ],
    headline: "GST-Ready Solar Quotations",
    summary:
      "Create professional solar quotations from inquiries with dynamic component pricing, GST rates, subsidy details, and manager approval — then share branded PDF proposals in minutes.",
    businessPurpose:
      "Speed up commercial proposals with accurate pricing, compliance-ready documents, and approval controls before orders are confirmed.",
    capabilities: [
      "Create quotations directly from inquiries",
      "Dynamic component and project pricing",
      "GST-ready with subsidy documentation",
      "Manager approval workflow",
      "Branded PDF quotation output",
      "Reusable quotation templates",
    ],
    howItWorks: [
      "Create quotation from a qualified inquiry with capacity and location data",
      "Apply pricing templates and submit for manager approval",
      "Generate and share branded PDF with the customer",
      "Convert approved quotation to a pending order",
    ],
    screenshots: [
      {
        src: "/platform/quotation-pdf-preview.png",
        alt: "GST-ready solar quotation PDF preview in techHind",
      },
    ],
    relatedSlugs: ["solar-lead-management", "solar-order-management"],
  },
  {
    slug: "solar-order-management",
    title: "Solar Order & Project Management",
    metaTitle: "Solar EPC Project Management Software India",
    metaDescription:
      "Manage solar orders from quotation to installation — confirmation pipeline, fabrication, serial capture, delivery challans, and commission tracking for EPC companies.",
    keywords: [
      "solar EPC project management",
      "solar order management software",
      "solar installation tracking India",
      "solar project lifecycle software",
    ],
    headline: "Solar Order & Project Lifecycle",
    summary:
      "Track every solar project from quotation conversion through order confirmation, fabrication, installation with serial capture, manager sign-off, and delivery dispatch.",
    businessPurpose:
      "Give operations teams end-to-end visibility from confirmed sale through field execution and installation completion.",
    capabilities: [
      "Quotation-to-order conversion with document collection",
      "Order confirmation pipeline with stage tracking",
      "Fabrication and installation workflow",
      "Panel and inverter serial number capture",
      "Installation manager approval",
      "Delivery challan generation",
      "Commission accrual per order",
    ],
    howItWorks: [
      "Convert approved quotation to pending order and collect customer documents",
      "Confirm order with stock reservation and payment schedule",
      "Execute fabrication and installation with serial registry",
      "Obtain manager sign-off and dispatch delivery challan",
    ],
    screenshots: [
      {
        src: "/platform/confirm-order-pipeline.png",
        alt: "Solar order confirmation pipeline in techHind CRM",
      },
    ],
    relatedSlugs: ["solar-quotation-software", "solar-inventory-software"],
  },
  {
    slug: "solar-inventory-software",
    title: "Solar Inventory & Procurement",
    metaTitle: "Solar Inventory Management Software India",
    metaDescription:
      "Manage solar component procurement, purchase orders, stock levels, serialized panel and inverter tracking, and warehouse transfers for EPC companies.",
    keywords: [
      "solar inventory management software",
      "solar procurement software India",
      "solar panel inventory tracking",
      "serialized solar inventory",
    ],
    headline: "Procurement & Serialized Inventory",
    summary:
      "Manage solar component supply from purchase orders and goods receipt through real-time stock levels and serial number tracking for panels and inverters.",
    businessPurpose:
      "Ensure the right components are available for every project with accurate stock, serial traceability, and warehouse control.",
    capabilities: [
      "Purchase order creation with supplier terms",
      "Goods receipt (PO inward) with serial capture",
      "Real-time stock levels by warehouse and product",
      "Serialized inventory for panels and inverters",
      "Stock transfers between warehouses",
      "Stock reservation against confirmed orders",
    ],
    howItWorks: [
      "Raise purchase order to supplier with line items",
      "Receive goods and register serial numbers at inward",
      "Monitor stock levels and reserve inventory for orders",
      "Issue stock against installation and delivery challans",
    ],
    screenshots: [
      {
        src: "/platform/stocks.png",
        alt: "Solar component stock levels by warehouse in techHind",
      },
    ],
    relatedSlugs: ["solar-order-management", "b2b-solar-trading"],
  },
  {
    slug: "b2b-solar-trading",
    title: "B2B Solar Trading",
    metaTitle: "B2B Solar Dealer Software India | Quotes, Orders & Invoices",
    metaDescription:
      "B2B solar trading module for dealer quotes, sales orders, shipments, invoices, and payment outstanding — integrated with EPC operations in techHind.",
    keywords: [
      "B2B solar dealer software",
      "solar distributor software India",
      "B2B solar invoicing",
      "solar trading platform",
    ],
    headline: "B2B Dealer Quotes, Orders & Invoices",
    summary:
      "Handle B2B solar distribution alongside EPC projects — dealer quotes, sales orders, shipments, invoices, and payment outstanding in one integrated platform.",
    businessPurpose:
      "Support dealer and distributor relationships with the same system that runs your EPC project operations.",
    capabilities: [
      "B2B client and dealer management",
      "Sales quotes and order processing",
      "Shipment tracking and returns",
      "B2B invoice generation",
      "Payment outstanding by dealer",
      "Integrated with inventory and stock",
    ],
    howItWorks: [
      "Create B2B sales quote for dealer or distributor",
      "Convert to sales order and schedule shipment",
      "Generate invoice and track payment outstanding",
      "Manage returns and stock reconciliation",
    ],
    screenshots: [
      {
        src: "/platform/b2b-sales-orders.png",
        alt: "B2B solar sales orders list in techHind CRM",
      },
    ],
    relatedSlugs: ["solar-inventory-software", "solar-payment-tracking"],
  },
  {
    slug: "solar-payment-tracking",
    title: "Solar Payment Collection & Outstanding",
    metaTitle: "Solar Payment Collection Software India",
    metaDescription:
      "Track solar project payments, outstanding balances, payment audits, follow-up reminders, and receipts for Indian EPC companies in techHind Solar CRM.",
    keywords: [
      "solar payment collection software",
      "solar outstanding tracking",
      "EPC payment management India",
      "solar project payment CRM",
    ],
    headline: "Payments & Outstanding Tracking",
    summary:
      "Record customer payments, monitor outstanding balances across all orders, run payment audits with approval, and automate follow-up reminders for collections.",
    businessPurpose:
      "Give finance teams real-time visibility into collections and outstanding amounts tied to every solar project.",
    capabilities: [
      "Payment recording against orders",
      "Outstanding balance dashboard",
      "Payment audit and approval workflow",
      "Follow-up reminders for overdue amounts",
      "Payment receipt generation",
      "B2B payment outstanding tracking",
    ],
    howItWorks: [
      "Record payments against confirmed orders per schedule",
      "Monitor outstanding balances and aging",
      "Route payments through audit approval when required",
      "Follow up on overdue amounts and close orders financially",
    ],
    screenshots: [
      {
        src: "/platform/confirm-order-pipeline.png",
        alt: "Solar order and payment pipeline in techHind CRM",
      },
    ],
    relatedSlugs: ["solar-order-management", "b2b-solar-trading"],
  },
  {
    slug: "solar-service-warranty",
    title: "Solar Service & Warranty Management",
    metaTitle: "Solar AMC & Warranty Management Software India",
    metaDescription:
      "Manage solar after-sales service tickets, warranty claims, spare parts, and service billing with serial number traceability in techHind Solar CRM.",
    keywords: [
      "solar AMC software India",
      "solar warranty management",
      "solar service ticket software",
      "solar O&M management software",
    ],
    headline: "Service Tickets & Warranty Claims",
    summary:
      "Handle after-sales service and warranty with full traceability to installed serial numbers — tickets, claims, spare parts, and service billing in one module.",
    businessPurpose:
      "Support customers post-installation with structured service workflows and warranty accountability.",
    capabilities: [
      "Service ticket creation and assignment",
      "Warranty claim processing",
      "Spare parts and material requests",
      "Service billing and history",
      "Serial number traceability to installation",
      "Service dashboard and search",
    ],
    howItWorks: [
      "Customer raises service request or warranty claim",
      "Assign to service team with linked order and serial data",
      "Track resolution, parts used, and service billing",
      "Maintain warranty history for audit and compliance",
    ],
    screenshots: [
      {
        src: "/platform/service-tickets.png",
        alt: "Solar service ticket management in techHind CRM",
      },
    ],
    relatedSlugs: ["solar-order-management", "solar-inventory-software"],
  },
];

export function getFeatureBySlug(slug: string): PlatformFeature | undefined {
  return platformFeatures.find((f) => f.slug === slug);
}

export const featureSlugs = platformFeatures.map((f) => f.slug);
