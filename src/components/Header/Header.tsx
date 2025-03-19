import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoImage = styled.img.attrs({
  className: "dp-logo",
})`
  height: 40px;
  margin-right: 10px;
  border-radius: 50%; /* Makes it circular if needed */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <Link to="/">
          <LogoImage src="/assets/logos/logo_8_mini.png" alt="Dreaming Polar" />
          <LogoText>Dreaming Polar</LogoText>
        </Link>
      </LogoSection>
      {/* Rest of header content */}
    </HeaderContainer>
  );
};

// Add necessary styled components
const HeaderContainer = styled.header.attrs({
  className: "dp-header",
})`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
`;

const LogoSection = styled.div.attrs({
  className: "dp-logo-section",
})`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;

const LogoText = styled.h1.attrs({
  className: "dp-logo-text",
})`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
`;

export default Header;
