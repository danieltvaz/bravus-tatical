import openWhatsapp from "../../../../../utils/open-whatsapp";
import styled from "styled-components";
import whatsappIcon from "../../../../../assets/icons/whatsapp.png";

const Container = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 999px) {
    & {
      justify-content: center;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 999px) {
    & {
      text-align: center;
      gap: 8px;
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  background-color: #fff;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  padding: 4px;
`;

const Icon = styled.img.attrs(() => ({
  src: whatsappIcon,
}))`
  width: 100%;
  height: 100%;
`;

const ContactLink = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  transition: color 1s;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default function Contact() {
  return (
    <Container>
      <Column>
        <IconContainer>
          <Icon />
        </IconContainer>
      </Column>
      <Column>
        <Row>
          <ContactLink onClick={() => openWhatsapp("+5522997221464")}>(22) 99722-1464</ContactLink>
        </Row>
        <Row>
          <ContactLink onClick={() => openWhatsapp("+5522999103236")}>(22) 99910-3236</ContactLink>
        </Row>
      </Column>
    </Container>
  );
}
