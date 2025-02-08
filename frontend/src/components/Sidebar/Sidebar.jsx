import React, { useState } from "react";
import {
  SidebarContainer,
  LogoWrapper,
  Navigation,
  NavList,
  LoginSection,
} from "./Sidebar.styles";
import MenuItem from "./MenuItem";
import menuItems from "./MenuData";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/lgo.svg';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleClick = (id, location) => {
    setSelectedItem(id);
    navigate(location);
  };

  return (
    <SidebarContainer>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
      </LogoWrapper>

      <Navigation>
        <NavList>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              isSelected={selectedItem === item.id}
              onClick={() => handleClick(item.id, item.location)}
            />
          ))}
        </NavList>
      </Navigation>

      <LoginSection>로그인</LoginSection>
    </SidebarContainer>
  );
};

export default Sidebar;
