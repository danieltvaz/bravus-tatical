import Contact from "../components/contact";
import { Link } from "react-router-dom";
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

const MenuLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  font-style: italic;
  transition: color 1s;
  &:hover {
    color: red;
  }
`;

export default function TopHeaderMenu() {
  return (
    <Container>
      <MenuItem>
        <Logo src={logo} />
      </MenuItem>
      <MenuItem>
        <MenuLink to={""}>INÍCIO</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={""}>LOJA</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to={""}>CAMPOS</MenuLink>
      </MenuItem>
      <MenuItem>
        <Contact />
      </MenuItem>
    </Container>
  );
}
