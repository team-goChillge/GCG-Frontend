// import styled from "styled-components";
import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import ItemCard from "../components/Common/ItemCard.jsx";
import Modal from "../components/Common/Modal.js";

const Share = () => {
  return (
    <>
      <Sidebar />
      <Layout>
        <ItemCard />
        <ItemCard />
        <Modal />
      </Layout>
    </>
  );
};

export default Share;
