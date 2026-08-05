import PillarPageLayout from "../components/PillarPageLayout";
import PillarPageStructuredData from "../components/structured-data/PillarPageStructuredData";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";
import { solarCrmPillar } from "../data/pillarPages";

export const metadata = buildPageMetadata({
  title: solarCrmPillar.metaTitle.replace(" | techHind", ""),
  description: solarCrmPillar.metaDescription,
  path: solarCrmPillar.path,
  keywords: solarCrmPillar.keywords,
});

export default function SolarCrmPillarPage() {
  return (
    <>
      <PillarPageStructuredData page={solarCrmPillar} />
      <BreadcrumbStructuredData
        items={[{ name: "Solar CRM", path: "/solar-crm" }]}
      />
      <PillarPageLayout page={solarCrmPillar} />
    </>
  );
}
