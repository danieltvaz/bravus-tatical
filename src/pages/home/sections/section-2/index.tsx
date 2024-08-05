import BackgroundImage from "./components/background-image";
import Button from "../../../../components/button";
import FlexColumn from "../../../../components/flex-column";
import SectionContainer from "../../../../components/section-container";
import Typography from "../../../../components/typography";

export default function HomePageSection2() {
  return (
    <SectionContainer style={{ minHeight: "400px", background: "transparent", position: "relative" }}>
      <FlexColumn
        minWidth={"100%"}
        alignItems="center"
        gap="36px"
        justifyContent="center"
        minHeight="400px"
        zIndex={1}
        position="absolute"
        top={0}
        left={0}>
        <Typography textAlign="center" fontStyle="italic" as="h2" color="#fff" fontSize="36px" fontWeight="600">
          Nossa loja
        </Typography>
        <Typography
          maxWidth="580px"
          textAlign="center"
          fontStyle="italic"
          as="p"
          color="#fff"
          fontSize="14px"
          fontWeight="500">
          PARA VOCÊ QUE DESEJA INGRESSAR NO MUNDO DO AIRSOFT, VENHA CONHECER A BRAVUS TACTICAL. UMA LOJA COMPLETA, COM
          TUDO QUE PRECISA EM UM SÓ LUGAR!
        </Typography>
        <a rel="noopener" href="https://www.bravustactical.com/" target="_blank">
          <Button variant="button">VER LOJA</Button>
        </a>
      </FlexColumn>
      <BackgroundImage />
    </SectionContainer>
  );
}
