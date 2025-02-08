import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const Suggest = () => {
  const [posts, setPosts] = useState([]);

  // ✅ 로컬 스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  // ✅ 게시글 삭제 기능
  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // ✅ 새 게시글 추가 기능
  const handleAddPost = () => {
    const newPost = { title: `건의사항 ${Date.now()}` };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <BoardContainer>
          <PostList>
            {posts.map((post, index) => (
              <PostItem key={index}>
                <PostTitle>{post.title}</PostTitle>
                <DeleteButton onClick={() => handleDelete(index)}>삭제</DeleteButton>
              </PostItem>
            ))}
          </PostList>
          <WriteButton onClick={handleAddPost}>글쓰기</WriteButton>
        </BoardContainer>
      </ContentContainer>
    </PageContainer>
  );
};

// ✅ 스타일 정의 (사이드바 가려짐 해결)
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 250px); /* 사이드바 너비 제외 */
  margin-left: 250px; /* 사이드바 너비만큼 이동 */
`;

const BoardContainer = styled.div`
  padding: 40px;
  background: #fff;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const PostTitle = styled.div`
  font-weight: bold;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

const WriteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #ffeb3b;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export default Suggest;
