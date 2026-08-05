import PillarPageLayout from "../components/PillarPageLayout";
import PillarPageStructuredData from "../components/structured-data/PillarPageStructuredData";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";
import { solarCrmVsZohoPillar } from "../data/pillarPages";

export const metadata = buildPageMetadata({
  title: solarCrmVsZohoPillar.metaTitle.replace(" | techHind", ""),
  description: solarCrmVsZohoPillar.metaDescription,
  path: solarCrmVsZohoPillar.path,
  keywords: solarCrmVsZohoPillar.keywords,
});

export default function SolarCrmVsZohoPage() {
  return (
    <>
      <PillarPageStructuredData page={solarCrmVsZohoPillar} />
      <BreadcrumbStructuredData
        items={[{ name: "Solar CRM vs Zoho", path: "/solar-crm-vs-zoho" }]}
      />
      <PillarPageLayout page={solarCrmVsZohoPillar} />
    </>
  );
}
