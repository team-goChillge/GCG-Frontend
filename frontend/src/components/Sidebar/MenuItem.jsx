import React from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#f1f3f5" : "transparent")};
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`;

const MenuItem = ({ title, isSelected, onClick }) => {
  return (
    <MenuItemWrapper $isSelected={isSelected} onClick={onClick}>
      {title}
    </MenuItemWrapper>
  );
};

export default MenuItem;
