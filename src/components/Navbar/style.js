import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #ffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
  /* font-style: normal;
  font-weight: 400;
  line-height: 24px; */
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: lightseagreen;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;

export { Container, Wrapper, Section, Logo, Link };
