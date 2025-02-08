import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

const ContractTable = () => {
  const [contracts, setContracts] = useState([]);

  // ✅ 로컬스토리지에서 데이터 불러오기 (초기값 설정)
  useEffect(() => {
    const storedContracts = JSON.parse(localStorage.getItem("contracts")) || [
      { id: "asdas", name: "차동규", phone: "010-5389-4148", room: "305", rent: "400만", contract: "asd.pdf", date: "11월 2일" },
      { id: "asdas", name: "차동규", phone: "010-5389-4148", room: "305", rent: "400만", contract: "asd.pdf", date: "11월 2일" },
      { id: "asdas", name: "차동규", phone: "010-5389-4148", room: "305", rent: "400만", contract: "asd.pdf", date: "11월 2일" },
      { id: "asdas", name: "차동규", phone: "010-5389-4148", room: "305", rent: "400만", contract: "asd.pdf", date: "11월 2일" },
      { id: "asdas", name: "차동규", phone: "010-5389-4148", room: "305", rent: "400만", contract: "asd.pdf", date: "11월 2일" }
    ];
    setContracts(storedContracts);
  }, []);

  return (
    <PageContainer>
      <Sidebar />
      <ContentContainer>
        <Table>
          <thead>
            <tr>
              <Th>아이디</Th>
              <Th>이름</Th>
              <Th>전화번호</Th>
              <Th>호수</Th>
              <Th>월세</Th>
              <Th>계약서</Th>
              <Th>납부일</Th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <tr key={index}>
                <Td><strong>{contract.id}</strong></Td>
                <Td>{contract.name}</Td>
                <Td>{contract.phone}</Td>
                <Td>{contract.room}</Td>
                <Td>{contract.rent}</Td>
                <Td>{contract.contract}</Td>
                <Td>{contract.date}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContentContainer>
    </PageContainer>
  );
};

// ✅ 스타일 정의
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  width: calc(100% - 250px);
  margin-left: 250px;
  padding: 40px;
  background: #fff;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const Th = styled.th`
  padding: 15px;
  border-bottom: 2px solid black;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

export default ContractTable;
