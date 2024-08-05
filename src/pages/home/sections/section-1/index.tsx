import BackgroundImage from "./components/background-image";
import SectionContainer from "../../../../components/section-container";
import TopHeader from "./compositions/top-header-text";
import TopHeaderMenu from "./compositions/top-header-menu";
import Typography from "../../../../components/typography";

export default function HomePageSection1() {
  return (
    <>
      <SectionContainer style={{ minHeight: "auto", padding: "0px" }}>
        <TopHeader>
          <Typography color="#fff" fontSize="1rem" fontWeight="600" as="h1">
            A MAIOR LOJA DE AIRSOFT DO RIO DE JANEIRO
          </Typography>
        </TopHeader>
      </SectionContainer>
      <SectionContainer>
        <BackgroundImage>
          <TopHeaderMenu />
        </BackgroundImage>
      </SectionContainer>
    </>
  );
}
