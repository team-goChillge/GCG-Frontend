import React from "react";
import {
  SidebarContainer,
  LogoWrapper,
  Logo,
  CommonButton,
  Navigation,
  NavList,
  LoginSection,
} from "./Sidebar.styles";
import MenuItem from "./MenuItem";
import menuItems from "./MenuData";
// import 공용물품아이콘 from "./공용물품.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <CommonButton>
        {/* <img src={공용물품아이콘} alt="공용물품" width="20" height="20" /> */}
        공용물품
      </CommonButton>

      <Navigation>
        <NavList>
          {menuItems.map((item) => (
            <MenuItem key={item.id} title={item.title} />
          ))}
        </NavList>
      </Navigation>

      <LoginSection>로그인</LoginSection>
    </SidebarContainer>
  );
};

export default Sidebar;
