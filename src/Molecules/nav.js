import React from "react";
import styled from "styled-components";

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const LogoStyle = styled.div`
  margin: 1%;
`;

const LinkStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ATag = styled.a`
  color: white;
  text-decoration: none;
`;

function Navbar() {
  return (
    <NavStyle>
      <LogoStyle>
        <img src="./NASA_logo.svg" alt="logo"></img>
      </LogoStyle>
      <LinkStyle>
        <ATag>About</ATag>
        <ATag>Photos</ATag>
        <ATag>Home</ATag>
      </LinkStyle>
    </NavStyle>
  );
}

export default Navbar;
