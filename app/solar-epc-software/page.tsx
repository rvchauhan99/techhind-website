import PillarPageLayout from "../components/PillarPageLayout";
import PillarPageStructuredData from "../components/structured-data/PillarPageStructuredData";
import BreadcrumbStructuredData from "../components/structured-data/BreadcrumbStructuredData";
import { buildPageMetadata } from "../config/metadata";
import { solarEpcSoftwarePillar } from "../data/pillarPages";

export const metadata = buildPageMetadata({
  title: solarEpcSoftwarePillar.metaTitle.replace(" | techHind", ""),
  description: solarEpcSoftwarePillar.metaDescription,
  path: solarEpcSoftwarePillar.path,
  keywords: solarEpcSoftwarePillar.keywords,
});

export default function SolarEpcSoftwarePillarPage() {
  return (
    <>
      <PillarPageStructuredData page={solarEpcSoftwarePillar} />
      <BreadcrumbStructuredData
        items={[{ name: "Solar EPC Software", path: "/solar-epc-software" }]}
      />
      <PillarPageLayout page={solarEpcSoftwarePillar} />
    </>
  );
}
