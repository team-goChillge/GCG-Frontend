import styled from "styled-components";

export const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const NavLink = styled.a`
  display: block;
  padding: 0.5rem;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f3f5;
  }
`;
