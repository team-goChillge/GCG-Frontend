import React from "react";
import styled from "styled-components";

const NoticeDetailModal = ({ notice, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Title>{notice.title}</Title>
        <MetaInfo>작성일: {notice.date}</MetaInfo>
        <Content>{notice.content}</Content>

        {/* ✅ 투표 항목 */}
        {notice.voteOptions.length > 0 && (
          <VoteSection>
            <h3>투표</h3>
            {notice.voteOptions.map((option, index) => (
              <VoteOption key={index}>{option}</VoteOption>
            ))}
            <ConfirmButton>결과 확인</ConfirmButton>
          </VoteSection>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};




// ✅ 스타일 정의
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  width: 50%;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const MetaInfo = styled.p`
  color: #888;
  font-size: 14px;
`;

const Content = styled.p`
  margin-top: 20px;
  font-size: 16px;
`;

const VoteSection = styled.div`
  margin-top: 30px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
`;

const VoteOption = styled.div`
  background: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const ConfirmButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ffda44;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    background: #ffcc00;
  }
`;

export default NoticeDetailModal;
