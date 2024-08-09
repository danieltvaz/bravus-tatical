import FlexColumn from "../../../../components/flex-column";
import FlexRow from "../../../../components/flex-row";
import SectionContainer from "../../../../components/section-container";
import Typography from "../../../../components/typography";
import campoAberto from "../../../../assets/photos/campo_aberto.png";

export default function HomePageSection3() {
  return (
    <SectionContainer style={{ minHeight: "auto", padding: "24px 0px", background: "#000" }}>
      <FlexColumn>
        <Typography textAlign="center" fontStyle="italic" as="h2" color="#fff" fontSize="36px" fontWeight="600">
          NOSSOS CAMPOS
        </Typography>
        <Typography textAlign="center" fontStyle="italic" as="h3" color="#fff" fontSize="12px" fontWeight="500">
          NOVA FRIBURGO - RJ
        </Typography>
        <FlexRow justifyContent="center" gap="10%" alignItems="center">
          <img
            style={{ maxWidth: "400px", maxHeight: "500px", borderRadius: "12px" }}
            title="Campo airsoft Nova Friburgo"
            src={campoAberto}
          />
          <img
            style={{ maxWidth: "400px", maxHeight: "500px", borderRadius: "12px" }}
            title="Campo airsoft Nova Friburgo"
            src={campoAberto}
          />
        </FlexRow>
      </FlexColumn>
    </SectionContainer>
  );
}
