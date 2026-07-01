export const includedCapabilities = [
  "Purchasing",
  "Inventory Management",
  "B2B Trading",
] as const;

export const pricingPlans = [
  {
    name: "Monthly Renewable",
    billingCycle: "monthly",
    monthlyPrice: 14999,
    cycleMonths: 1,
    userLimit: "Up to 200 users",
    description: "Best for teams that prefer maximum billing flexibility.",
    features: [
      ...includedCapabilities,
      "Lead-to-project lifecycle management",
      "Project tracking and task workflows",
      "Mobile field access",
      "Business reporting dashboard",
      "Priority support",
    ],
    limitations: [] as string[],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Quarterly Renewable",
    billingCycle: "quarterly",
    monthlyPrice: 14499,
    cycleMonths: 3,
    userLimit: "Up to 200 users",
    description: "Balanced pricing for teams planning a quarter ahead.",
    features: [
      ...includedCapabilities,
      "Lead-to-project lifecycle management",
      "Project tracking and task workflows",
      "Mobile field access",
      "Business reporting dashboard",
      "Priority support",
    ],
    limitations: [] as string[],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Half-Year Renewable",
    billingCycle: "half-yearly",
    monthlyPrice: 13999,
    cycleMonths: 6,
    userLimit: "Up to 200 users",
    description: "Lower monthly cost with stronger half-year commitment.",
    features: [
      ...includedCapabilities,
      "Lead-to-project lifecycle management",
      "Project tracking and task workflows",
      "Mobile field access",
      "Business reporting dashboard",
      "Priority support",
    ],
    limitations: [] as string[],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Yearly Renewable",
    billingCycle: "yearly",
    monthlyPrice: 12999,
    cycleMonths: 12,
    userLimit: "Up to 200 users",
    description: "Best value plan for long-term growth and planning.",
    features: [
      ...includedCapabilities,
      "Lead-to-project lifecycle management",
      "Project tracking and task workflows",
      "Mobile field access",
      "Business reporting dashboard",
      "Priority support",
    ],
    limitations: [] as string[],
    popular: true,
    cta: "Get Started",
  },
] as const;

export const pricingFaqItems = [
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, all plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, UPI, and bank transfers for enterprise plans.",
  },
] as const;
