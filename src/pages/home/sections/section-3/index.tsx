import Button from "../../../../components/button";
import FlexColumn from "../../../../components/flex-column";
import FlexRow from "../../../../components/flex-row";
import ImageWithLabel from "../../../../components/image-with-label";
import SectionContainer from "../../../../components/section-container";
import Spacer from "../../../../components/spacer";
import Typography from "../../../../components/typography";
import campoAberto from "../../../../assets/photos/campo_aberto.png";
import campoFechado from "../../../../assets/photos/campo_fechado.jpg";
import equipamento from "../../../../assets/photos/equipamento.png";

export default function HomePageSection3() {
  return (
    <SectionContainer style={{ background: "#000", padding: "24px 0px" }}>
      <FlexColumn>
        <Typography textAlign="center" fontStyle="italic" as="h2" color="#fff" fontSize="36px" fontWeight="600">
          NOSSOS CAMPOS
        </Typography>
        <Spacer orientation="vertical" size="12px" />
        <Typography textAlign="center" fontStyle="italic" as="h3" color="#fff" fontSize="12px" fontWeight="500">
          NOVA FRIBURGO - RJ
        </Typography>
        <Spacer orientation="vertical" size="36px" />
        <FlexColumn>
          <FlexRow justifyContent="center" gap="36px" alignItems="center" minWidth={"100vw"}>
            <ImageWithLabel
              src={campoAberto}
              maxWidth="350px"
              maxHeight="600px"
              label={
                <>
                  <Typography color="#fff" fontSize="24px" fontWeight="600">
                    FAVELINHA
                  </Typography>
                  <Spacer orientation="vertical" size="8px" />
                  <Typography color="#fff" fontSize="18px" fontWeight="400">
                    Prado
                  </Typography>
                </>
              }
            />
            <ImageWithLabel
              src={campoFechado}
              maxWidth="350px"
              maxHeight="600px"
              label={
                <>
                  <Typography color="#fff" fontSize="24px" fontWeight="600">
                    CQB
                  </Typography>
                  <Spacer orientation="vertical" size="8px" />
                  <Typography color="#fff" fontSize="18px" fontWeight="400">
                    Olaria
                  </Typography>
                </>
              }
            />
          </FlexRow>
        </FlexColumn>
        <FlexColumn position="relative">
          <img src={equipamento} style={{ maxWidth: "100vw" }} />
          <Button variant="button" style={{ position: "absolute", bottom: "20%", right: "5%" }}>
            <Typography color="#fff" fontSize="18px" fontWeight="600">
              ALUGAR
            </Typography>
          </Button>
        </FlexColumn>
      </FlexColumn>
    </SectionContainer>
  );
}
