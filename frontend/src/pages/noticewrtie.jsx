import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import { useNavigate } from "react-router-dom";

const NoticeWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [voteOptions, setVoteOptions] = useState(["", ""]); // 기본 2개 투표 옵션
  const navigate = useNavigate();

  // ✅ 투표 옵션 추가
  const addVoteOption = () => {
    setVoteOptions([...voteOptions, ""]);
  };

  // ✅ 투표 옵션 변경
  const handleVoteChange = (index, value) => {
    const newVoteOptions = [...voteOptions];
    newVoteOptions[index] = value;
    setVoteOptions(newVoteOptions);
  };

  // ✅ 공지 저장
  const handleSave = () => {
    if (!title || !content) {
      alert("제목과 본문을 입력하세요!");
      return;
    }

    const newNotice = {
      id: Date.now(),
      title,
      content,
      voteOptions: voteOptions.filter((opt) => opt.trim() !== ""), // 빈 항목 제거
      date: new Date().toISOString().split("T")[0],
    };

    // ✅ 로컬스토리지에 저장
    const storedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    localStorage.setItem("notices", JSON.stringify([newNotice, ...storedNotices]));

    navigate("/notice"); // 저장 후 공지 목록으로 이동
  };

  return (
    <PageContainer>
      <Sidebar />
      <WriteContainer>
        <h2>공지 작성</h2>
        <Input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="본문을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <VoteSection>
          <h3>투표 항목</h3>
          {voteOptions.map((option, index) => (
            <Input
              key={index}
              type="text"
              placeholder={`투표 옵션 ${index + 1}`}
              value={option}
              onChange={(e) => handleVoteChange(index, e.target.value)}
            />
          ))}
          <AddButton onClick={addVoteOption}>+ 옵션 추가</AddButton>
        </VoteSection>
        <SaveButton onClick={handleSave}>저장</SaveButton>
      </WriteContainer>
    </PageContainer>
  );
};

// ✅ 스타일 정의 (사이드바 문제 해결)
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const WriteContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 250px); /* 사이드바 너비만큼 제외 */
  margin-left: 250px; /* 사이드바 크기만큼 이동 */
  padding: 40px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const VoteSection = styled.div`
  margin-top: 20px;
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #ffda44;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #ffcc00;
  }
`;

export default NoticeWrite;
