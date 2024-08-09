import HomePageSection1 from "./sections/section-1";
import HomePageSection2 from "./sections/section-2";
import HomePageSection3 from "./sections/section-3";
import PageContainer from "../../components/page-container";

export default function HomePage() {
  return (
    <PageContainer>
      <HomePageSection1 />
      <HomePageSection2 />
      <HomePageSection3 />
    </PageContainer>
  );
}
