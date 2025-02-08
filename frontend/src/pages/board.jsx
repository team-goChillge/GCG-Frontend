import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const Board = () => {
  const [posts, setPosts] = useState([]);

  // ✅ 로컬스토리지에서 게시글 불러오기
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <BoardContainer>
        <BackButton onClick={() => window.history.back()}>←</BackButton>
        <PostGrid>
          {posts.length === 0 ? (
            <EmptyMessage>게시글이 없습니다.</EmptyMessage>
          ) : (
            posts.map((post, index) => (
              <PostIt key={index}>
                <PostTitle>{post.title}</PostTitle>
              </PostIt>
            ))
          )}
        </PostGrid>
      </BoardContainer>
    </PageContainer>
  );
};

// ✅ 스타일 정의
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const BoardContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 250px);
  margin-left: 250px;
  padding: 40px;
  background-color: #fff;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const PostIt = styled.div`
  background: #ffeb3b;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostTitle = styled.div`
  font-weight: bold;
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #888;
  margin-top: 20px;
`;

export default Board;
