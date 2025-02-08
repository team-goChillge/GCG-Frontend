import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  transition: 0.2s;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: #ffd43b;
  }
`;

export const CardImage = styled.div`
  width: 50px;
  height: 50px;
  background: gray;
  border-radius: 8px;
  margin-right: 1rem;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

export const CardIcon = styled.img`
  font-size: 20px;
  color: #333;
`;
