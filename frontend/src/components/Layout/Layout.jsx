import React from "react";
import { LayoutContainer, ContentBox } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentBox>{children}</ContentBox>
    </LayoutContainer>
  );
};

export default Layout;
