/** SEO pillar page content — exact-match buyer-intent landings */

export type PillarFaq = { question: string; answer: string };

export type PillarPage = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  intro: string;
  problemTitle: string;
  problemBody: string;
  problemPoints: string[];
  workflowTitle: string;
  workflowSteps: { title: string; body: string }[];
  modulesTitle: string;
  modules: { title: string; body: string; href: string }[];
  comparisonTitle: string;
  comparisonIntro: string;
  comparisonRows: { capability: string; techhind: string; generic: string }[];
  faqs: PillarFaq[];
  ctaTitle: string;
  ctaBody: string;
};

export const solarCrmPillar: PillarPage = {
  slug: "solar-crm",
  path: "/solar-crm",
  metaTitle: "Solar CRM for EPC Companies in India | techHind",
  metaDescription:
    "Solar CRM built for Indian EPC companies — leads, site visits, GST quotations, orders, inventory, B2B dealers, payments, and AMC in one Solar Management System.",
  keywords: [
    "solar CRM",
    "solar CRM India",
    "solar CRM for EPC companies",
    "CRM for solar EPC",
    "solar management system India",
  ],
  eyebrow: "Solar CRM · India",
  h1: "Solar CRM for EPC Companies in India",
  intro:
    "techHind is a Solar CRM and complete Solar Management System built exclusively for Indian Solar EPC companies. Run leads, site visits, GST quotations, orders, serialized inventory, B2B dealer trading, payments, and after-sales — in one cloud platform designed for residential and commercial solar.",
  problemTitle: "Why Solar EPCs Outgrow Excel, WhatsApp, and Generic CRM",
  problemBody:
    "When rooftop volume rises under schemes like PM Surya Ghar, the bottleneck is execution — not just more leads. Teams lose follow-ups in WhatsApp, quotes live in spreadsheets, stock and serials drift, and finance cannot see outstanding cleanly.",
  problemPoints: [
    "Leads from Meta ads, dealers, and walk-ins scatter across tools",
    "Site survey → quotation → order handoffs break without a solar pipeline",
    "Panels and inverters need serial tracking generic CRMs do not offer",
    "DISCOM, subsidy, and document checklists do not fit Zoho/HubSpot out of the box",
    "Multi-branch EPC teams need role-based access and one source of truth",
  ],
  workflowTitle: "Solar CRM Workflow Built for Indian EPC",
  workflowSteps: [
    {
      title: "Leads & inquiries",
      body: "Capture Meta Lead Ads and marketing leads, assign owners, and convert to qualified inquiries with capacity, location, and DISCOM context.",
    },
    {
      title: "Site visit & quotation",
      body: "Schedule surveys, build GST-ready solar quotations with approval, and send branded PDFs customers actually understand.",
    },
    {
      title: "Order → delivery → install",
      body: "Confirm orders, reserve stock, track fabrication/installation with serial capture, and issue delivery challans.",
    },
    {
      title: "Payments, B2B & AMC",
      body: "Track outstanding balances, run dealer quotes/shipments/invoices, and manage service tickets and warranty after commissioning.",
    },
  ],
  modulesTitle: "What You Get in techHind Solar CRM",
  modules: [
    {
      title: "Lead management",
      body: "Kanban pipelines, Meta Lead Ads sync, bulk import, and follow-up discipline.",
      href: "/features/solar-lead-management",
    },
    {
      title: "Quotations & orders",
      body: "GST quotations, approvals, PDF proposals, and full order lifecycle.",
      href: "/features/solar-quotation-software",
    },
    {
      title: "Inventory & serials",
      body: "PO, inward, warehouses, and serialized panels/inverters.",
      href: "/features/solar-inventory-software",
    },
    {
      title: "B2B trading",
      body: "Dealer quotes, orders, shipments, invoices, and outstanding.",
      href: "/features/b2b-solar-trading",
    },
    {
      title: "Payments",
      body: "Receipts, outstanding tracking, audits, and follow-up reminders.",
      href: "/features/solar-payment-tracking",
    },
    {
      title: "Service & warranty",
      body: "After-sales tickets, warranty claims, and spare parts with traceability.",
      href: "/features/solar-service-warranty",
    },
  ],
  comparisonTitle: "Solar CRM vs Generic CRM",
  comparisonIntro:
    "Generic CRMs manage contacts and pipelines. A Solar CRM must also understand EPC execution — stock, serials, GST solar quotes, dealer trading, and India-first field workflows.",
  comparisonRows: [
    {
      capability: "Solar lead → install pipeline",
      techhind: "Native stages",
      generic: "Custom fields only",
    },
    {
      capability: "GST solar quotations + PDF",
      techhind: "Built-in",
      generic: "Templates / add-ons",
    },
    {
      capability: "Panel / inverter serial tracking",
      techhind: "Built-in inventory",
      generic: "Not available",
    },
    {
      capability: "B2B dealer orders & invoices",
      techhind: "Included",
      generic: "Separate ERP usually",
    },
    {
      capability: "India DISCOM / subsidy-aware ops context",
      techhind: "Designed for EPC teams",
      generic: "Bolt-on configuration",
    },
  ],
  faqs: [
    {
      question: "What is a Solar CRM?",
      answer:
        "A Solar CRM is software built for solar sales and delivery — not only contacts. techHind combines CRM with EPC operations: inquiries, site visits, quotations, orders, inventory, payments, B2B dealers, and after-sales in one system.",
    },
    {
      question: "Is techHind only a CRM or a full Solar Management System?",
      answer:
        "techHind is marketed as Solar CRM and operates as a complete Solar Management System for Indian EPC companies — covering pre-sales through installation, stock, finance visibility, and service.",
    },
    {
      question: "Who is techHind Solar CRM for?",
      answer:
        "Indian Solar EPC companies, distributors, and integrators running residential and commercial projects who need one platform for sales, warehouse, finance, and field teams.",
    },
    {
      question: "Does techHind support a free trial?",
      answer:
        "Yes. techHind offers a 14-day free trial with no payment required. You can book a demo or start from the pricing page.",
    },
    {
      question: "How is pricing structured for Solar CRM in India?",
      answer:
        "Plans start from ₹12,999/month on the yearly plan (₹14,999 monthly), including core modules and up to 200 users. See current details on the pricing page.",
    },
  ],
  ctaTitle: "See Solar CRM working on your EPC workflow",
  ctaBody:
    "Book a 10-minute demo or start a 14-day free trial. Replace WhatsApp chaos with one India-first Solar CRM.",
};

export const solarEpcSoftwarePillar: PillarPage = {
  slug: "solar-epc-software",
  path: "/solar-epc-software",
  metaTitle: "Solar EPC Software India | Complete Solar Management System",
  metaDescription:
    "Solar EPC software for Indian installers — project lifecycle, inventory, B2B trading, payments, and after-sales. techHind Solar Management System.",
  keywords: [
    "solar EPC software",
    "solar EPC software India",
    "solar project management software India",
    "solar installer software",
    "solar management system",
  ],
  eyebrow: "Solar EPC Software · India",
  h1: "Solar EPC Software for Indian Installers",
  intro:
    "techHind is solar EPC software that connects sales and operations. Manage the full project lifecycle — from marketing lead to installation, serialized stock, dealer trading, outstanding payments, and service — without stitching Zoho + Excel + WhatsApp.",
  problemTitle: "EPC Software Must Match How Solar Companies Actually Work",
  problemBody:
    "Install capacity is rising across India. EPCs that win are the ones that process surveys, quotes, procurement, installs, and documents faster — with fewer dropped balls between office and field.",
  problemPoints: [
    "Project stages are solar-specific — not generic task boards",
    "Procurement and warehouse must sync with confirmed orders",
    "Field teams need serial capture and clear work queues",
    "Finance needs outstanding and document audit on every project",
    "Dealer / distributor lines often sit beside retail EPC work",
  ],
  workflowTitle: "From Lead to Commissioning in One System",
  workflowSteps: [
    {
      title: "Win the job",
      body: "Leads, inquiries, site visits, GST quotations, and order confirmation with document collection.",
    },
    {
      title: "Supply the job",
      body: "Purchase orders, inward, warehouse stock, transfers, and serial tracking for panels and inverters.",
    },
    {
      title: "Deliver the job",
      body: "Fabrication, installation approvals, delivery challans, and commissioning handoff.",
    },
    {
      title: "Run the company",
      body: "Payments, B2B shipments/invoices, commissions, dashboards, and after-sales service.",
    },
  ],
  modulesTitle: "Solar EPC Modules Inside techHind",
  modules: [
    {
      title: "Order & project execution",
      body: "Confirm orders, amendments, installation workflows, and delivery.",
      href: "/features/solar-order-management",
    },
    {
      title: "Inventory for solar BOM",
      body: "PO to warehouse with serialised components.",
      href: "/features/solar-inventory-software",
    },
    {
      title: "B2B solar trading",
      body: "Dealers, shipments, invoices, and outstanding in one place.",
      href: "/features/b2b-solar-trading",
    },
    {
      title: "Solar CRM front office",
      body: "Leads, Meta ads, quotations — connected to operations.",
      href: "/solar-crm",
    },
  ],
  comparisonTitle: "Solar EPC Software vs Spreadsheet Ops",
  comparisonIntro:
    "Spreadsheets scale until parallel projects explode. purpose-built solar EPC software keeps sales, warehouse, and finance on one timeline.",
  comparisonRows: [
    {
      capability: "Single project truth",
      techhind: "Yes",
      generic: "Multiple files",
    },
    {
      capability: "Stock reserved to order",
      techhind: "Yes",
      generic: "Manual",
    },
    {
      capability: "Serial history",
      techhind: "Yes",
      generic: "Rarely tracked",
    },
    {
      capability: "Dealer + retail together",
      techhind: "B2B module included",
      generic: "Separate tools",
    },
  ],
  faqs: [
    {
      question: "What is solar EPC software?",
      answer:
        "Software that helps Engineering, Procurement, and Construction solar companies run sales and delivery — quotations, procurement, install tracking, inventory, and after-sales — not just a contact list.",
    },
    {
      question: "Is techHind suitable for small and mid-size EPCs?",
      answer:
        "Yes. techHind is priced and designed for Indian EPC teams that need full lifecycle coverage without enterprise SAP complexity.",
    },
    {
      question: "Does it replace both CRM and operations tools?",
      answer:
        "For many mid-size EPCs, yes — techHind covers Solar CRM plus inventory, B2B trading, payments, and service in one Solar Management System. Accounting can still pair with your CA / Tally stack as needed.",
    },
  ],
  ctaTitle: "Run more solar installs with less chaos",
  ctaBody:
    "See techHind solar EPC software on a live demo — or start a 14-day free trial.",
};

export const solarCrmVsZohoPillar: PillarPage = {
  slug: "solar-crm-vs-zoho",
  path: "/solar-crm-vs-zoho",
  metaTitle: "Solar CRM vs Zoho for Indian EPC Companies | techHind",
  metaDescription:
    "Compare Solar CRM vs Zoho for Indian EPC companies. techHind covers lead-to-install, GST quotes, serial inventory, B2B dealers, and AMC — Solar Management System depth Zoho lacks out of the box.",
  keywords: [
    "solar CRM vs Zoho",
    "solar CRM vs Zoho India",
    "Zoho for solar EPC",
    "best Solar CRM India",
  ],
  eyebrow: "Comparison · Solar CRM vs Zoho",
  h1: "Solar CRM vs Zoho for Indian EPC Companies",
  intro:
    "Zoho is a strong generic CRM. Indian Solar EPCs still need site visits, GST solar quotations, serialized panels/inverters, dealer trading, and after-sales tied to the same project. That is where a Solar CRM / Solar Management System like techHind wins.",
  problemTitle: "Where Zoho alone creates parallel systems",
  problemBody:
    "Many EPC teams start on Zoho for contacts and deals, then still run WhatsApp + Excel for surveys, stock serials, challans, and outstanding. Parallel systems are the cost.",
  problemPoints: [
    "Solar pipeline stages are custom-configured, not native",
    "GST solar proposal + approval is bolted on",
    "Panel/inverter serial tracking is not a Zoho CRM default",
    "B2B dealer shipments/invoices usually need another product",
    "India DISCOM / subsidy document context is missing",
  ],
  workflowTitle: "What to evaluate in a side-by-side demo",
  workflowSteps: [
    {
      title: "Lead → inquiry → site visit",
      body: "Include Meta Lead Ads and DISCOM/capacity fields — not just a contact card.",
    },
    {
      title: "GST quotation → order",
      body: "Branded PDF, approvals, and conversion into a real solar order with stock reservation.",
    },
    {
      title: "Install + serials",
      body: "Capture panel/inverter serials and delivery challans on the same project.",
    },
    {
      title: "Payments + service",
      body: "Outstanding tracking and AMC/warranty after commissioning.",
    },
  ],
  modulesTitle: "Where techHind is built for solar",
  modules: [
    {
      title: "Solar CRM overview",
      body: "Full Solar Management System positioning for EPC buyers.",
      href: "/solar-crm",
    },
    {
      title: "Lead management",
      body: "Meta ads + pipeline designed for solar sales.",
      href: "/features/solar-lead-management",
    },
    {
      title: "Inventory & serials",
      body: "PO, warehouse, serialized components.",
      href: "/features/solar-inventory-software",
    },
    {
      title: "B2B trading",
      body: "Dealer quotes, shipments, invoices.",
      href: "/features/b2b-solar-trading",
    },
  ],
  comparisonTitle: "techHind Solar CRM vs Zoho (at a glance)",
  comparisonIntro:
    "Zoho is excellent as a general CRM suite. techHind is purpose-built for Indian solar EPC operations end to end.",
  comparisonRows: [
    {
      capability: "Solar lead → install stages",
      techhind: "Native",
      generic: "Custom configuration",
    },
    {
      capability: "GST solar quotations + PDF",
      techhind: "Built-in",
      generic: "Templates / add-ons",
    },
    {
      capability: "Panel / inverter serials",
      techhind: "Native inventory",
      generic: "Not CRM-native",
    },
    {
      capability: "Dealer B2B trading",
      techhind: "Included module",
      generic: "Separate apps",
    },
    {
      capability: "India EPC document context",
      techhind: "Designed in",
      generic: "Manual fields",
    },
  ],
  faqs: [
    {
      question: "Can Zoho be customized for solar?",
      answer:
        "Yes, with enough configuration and extra tools. Most mid-size EPCs still end up with WhatsApp/Excel for stock, serials, and field execution. techHind ships those workflows as product.",
    },
    {
      question: "Is techHind only a CRM?",
      answer:
        "techHind is marketed as Solar CRM and operates as a complete Solar Management System — sales, ops, inventory, B2B, payments, and service.",
    },
    {
      question: "How should we compare in a demo?",
      answer:
        "Ask both vendors to walk lead → quote → order → serial install → payment → service ticket on one project record.",
    },
  ],
  ctaTitle: "See the Solar CRM difference in 10 minutes",
  ctaBody:
    "Book a techHind demo focused on your EPC workflow — or start a 14-day free trial.",
};

export const pillarPages: PillarPage[] = [
  solarCrmPillar,
  solarEpcSoftwarePillar,
  solarCrmVsZohoPillar,
];

export const pillarBySlug: Record<string, PillarPage> = Object.fromEntries(
  pillarPages.map((p) => [p.slug, p])
);
