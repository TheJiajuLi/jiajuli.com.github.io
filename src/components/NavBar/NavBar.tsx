import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSearch, FiMusic, FiSettings, FiLock } from "react-icons/fi";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavList>
          <NavItem
            $isActive={
              location.pathname === "/" || location.pathname === "/explorer"
            }
          >
            <NavLink to="/explorer">
              <FiHome size={20} />
              <NavText>Home</NavText>
            </NavLink>
          </NavItem>

          <NavItem $isActive={location.pathname === "/search"}>
            <NavLink to="/search">
              <FiSearch size={20} />
              <NavText>Search</NavText>
            </NavLink>
          </NavItem>

          <NavItem $isActive={location.pathname === "/library"}>
            <NavLink to="/library">
              <FiMusic size={20} />
              <NavText>Library</NavText>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/community-upload" title="Admin Only">
              <FiLock size={20} />
              <NavText>Admin Upload</NavText>
            </NavLink>
          </NavItem>

          <NavItem $isActive={location.pathname === "/settings"}>
            <NavLink to="/settings">
              <FiSettings size={20} />
              <NavText>Settings</NavText>
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.25rem; // Reduced padding for mobile
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0.25rem; // Reduced padding
    gap: 0.5rem; // Reduced gap between items
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;

  @media (max-width: 768px) {
    margin-right: 2px; // Reduced margin
  }
`;

const Logo = styled.img.attrs({
  src: "/assets/logos/logo_5_mini.png",
  alt: "Dreaming Polar",
  loading: "eager",
})`
  height: 40px;
  width: auto;
  margin-left: 0.8rem;

  @media (max-width: 768px) {
    height: 20px; // Reduced from 24px to 20px
    margin-left: 0.4rem; // Reduced margin
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem; // Reduced gap between nav items
  }
`;

const NavItem = styled.li<{ $isActive?: boolean }>`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme, $isActive }) =>
      $isActive ? theme.accent?.primary || "#5e35b1" : "transparent"};
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;

    svg {
      width: 14px; // Reduced from 16px
      height: 14px; // Reduced from 16px
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent?.primary || "#5e35b1"};
  }

  @media (max-width: 768px) {
    padding: 4px 6px; // Reduced padding
    gap: 4px; // Reduced gap
  }
`;

const NavText = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavBar;
