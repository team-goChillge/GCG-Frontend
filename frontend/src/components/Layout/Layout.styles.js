import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin-left: 260px; /* 사이드바 너비 */
  padding: 2rem;
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ContentBox = styled.div`
  width: 100%;
  max-width: 900px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  height: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
