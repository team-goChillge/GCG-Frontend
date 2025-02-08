import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 260px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #eaeaea;
  position: fixed;
  left: 0;
  top: 0;
`;

export const LogoWrapper = styled.div`
  padding: 1rem;
`;

export const Logo = styled.div`
  width: 100%;
  height: 48px;
  background-color: #666;
`;

export const CommonButton = styled.button`
  width: calc(100% - 2rem);
  margin: 0 1rem 1rem;
  padding: 0.5rem 1rem;
  background-color: #ffd43b;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #fcc419;
  }

  &.selected {
    background-color: #FDE047;
    color: #333;
  }

  &:focus,
  &:focus-visible {
    background-color:#FDE047;
    outline: none;
    box-shadow: none;
  }
`;


export const Navigation = styled.nav`
  padding: 0 1rem;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LoginSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  color: #495057;
`;
