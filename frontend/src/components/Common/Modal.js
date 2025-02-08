import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 1063px;
  height: 658px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ModalItem = styled.li`
  border-bottom: 1px solid #000;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // 모달이 닫혀 있으면 렌더링 안 함

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>냉장고 사용 기록</h2>
        <p>여기에서 냉장고 사용 기록을 볼 수 있어요.</p>
        <ModalList>
          <ModalItem>
            2025/02/08 - 10:01:12 차동규님이 냉장고를 열었습니다.
          </ModalItem>
          <ModalItem>
            2025/02/08 - 10:05:30 홍길동님이 냉장고를 닫았습니다.
          </ModalItem>
          <ModalItem>
            2025/02/08 - 10:10:45 이순신님이 냉장고를 열었습니다.
          </ModalItem>
          <ModalItem>
            2025/02/08 - 10:15:20 강감찬님이 냉장고를 닫았습니다.
          </ModalItem>
        </ModalList>
        <CloseButton
          onClick={() => {
            console.log("모달 닫기 클릭됨"); // 디버깅용
            onClose();
          }}
        >
          닫기
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
