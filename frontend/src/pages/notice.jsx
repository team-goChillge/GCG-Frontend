import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import NoticeDetailModal from "../components/NoticeDetailModal.jsx";
import { useNavigate } from "react-router-dom"; // ✅ 추가

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null); 
  const navigate = useNavigate(); // ✅ 추가

  // ✅ 로컬스토리지에서 공지 불러오기
  useEffect(() => {
    const storedNotices = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(storedNotices);
  }, []);

  // ✅ 공지 삭제
  const handleDelete = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices);
    localStorage.setItem("notices", JSON.stringify(updatedNotices));
  };

  // ✅ 모달 열기
  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  // ✅ 모달 닫기
  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <PageContainer>
      <Sidebar />
      <NoticeContainer>
        <NoticeHeader>
          <h2>공지사항</h2>
          <WriteButton onClick={() => navigate("/noticewrite")}>글쓰기</WriteButton>
        </NoticeHeader>
        <NoticeList>
          {notices.length === 0 ? (
            <EmptyMessage>등록된 공지가 없습니다.</EmptyMessage>
          ) : (
            notices.map((notice) => (
              <NoticeItem key={notice.id} onClick={() => openModal(notice)}>
                <div>
                  <strong>{notice.title}</strong> - {notice.date}
                </div>
                <NoticeDeleteButton onClick={(e) => {
                  e.stopPropagation(); 
                  handleDelete(notice.id);
                }}>
                  삭제
                </NoticeDeleteButton>
              </NoticeItem>
            ))
          )}
        </NoticeList>
      </NoticeContainer>

      {selectedNotice && <NoticeDetailModal notice={selectedNotice} onClose={closeModal} />}
    </PageContainer>
  );
};

// ✅ 스타일 정의
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const NoticeContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 250px);
  margin-left: 250px;
  padding: 40px;
  background-color: #fff;
`;

const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between; /* ✅ 글쓰기 버튼을 우측으로 정렬 */
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoticeItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NoticeDeleteButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;

const WriteButton = styled.button`
  padding: 10px 15px;
  background: #ffda44;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #ffcc00;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  color: #888;
  margin-top: 20px;
`;

export default Notice;
