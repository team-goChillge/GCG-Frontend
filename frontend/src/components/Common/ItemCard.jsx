import React, { useState } from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardIcon,
} from "./ItemCard.styles";
import img from "../../assets/menu.svg";
import Modal from "./Modal.js";

const ItemCard = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CardContainer onClick={() => setIsModalOpen(true)}>
      {" "}
      {/* 클릭 시 모달 열기 */}
      <CardImage />
      <CardContent>{title || "냉장고 1"}</CardContent>
      <CardIcon src={img} alt="메뉴 아이콘" />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </CardContainer>
  );
};

export default ItemCard;
