import Contact from "../components/contact";
import Typography from "../../../../../components/typography";
import logo from "../../../../../assets/logo/logo_bravus.png";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  flex-wrap: wrap;

  @media screen and (max-width: 999px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      margin: auto;
    }
  }
`;

const MenuItem = styled.div`
  @media screen and (max-width: 999px) {
    & {
      justify-content: center;
      width: 100%;
      text-align: center;
    }
  }
`;

const Logo = styled.img`
  max-width: 190px;

  @media screen and (max-width: 999px) {
    & {
      max-width: 10rem;
    }
  }
`;

export default function TopHeaderMenu() {
  return (
    <Container>
      <MenuItem>
        <Logo src={logo} />
      </MenuItem>
      <MenuItem>
        <Typography
          as="a"
          href=""
          color="#fff"
          fontSize="2rem"
          fontWeight="600"
          fontStyle="italic"
          textDecoration="none">
          INÍCIO
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          as="a"
          href=""
          color="#fff"
          fontSize="2rem"
          fontWeight="600"
          fontStyle="italic"
          textDecoration="none">
          LOJA
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          as="a"
          href=""
          color="#fff"
          fontSize="2rem"
          fontWeight="600"
          fontStyle="italic"
          textDecoration="none">
          CAMPOS
        </Typography>
      </MenuItem>
      <MenuItem>
        <Contact />
      </MenuItem>
    </Container>
  );
}
