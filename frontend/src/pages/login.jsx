import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import arrow from "../assets/arrow.svg"
import React from 'react'
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <>
        <GlobalStyle />
      <Body>
        <Yellow />
        <Red>
        <Modal>
            <Arrow src={arrow}></Arrow>
            <Text>관리자로 로그인</Text>
            <Text2>아이디 </Text2>
            <Input placeholder="아이디를 입력하세요." />
            <Text3 >비밀번호 </Text3>
            <Input placeholder="비밀번호를 입력하세요." type="password"/>
            <Button>로그인</Button>
            <Text4 onClick={()=> navigate("/signup")}>회원가입</Text4>
        </Modal>
        </Red>
      </Body>
      </>
    );
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #ECF0F1;
    gap: 0; 
    font-family: Pretendard;
`;

const Yellow = styled.div`
    background-color: #FDE047;

    width: 100vw; 
    height: 100vh;
    margin-right: 400px;
`;

const Red = styled.div`
    width: 50vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`;
const Modal = styled.div`
    position: fixed;
    
    background-color: #ffffff;
    height: 655px;
    width:500px;
    border-radius: 5px;
    margin-right: 360px;
`; 
const Arrow = styled.img`
    width: 16px;
    height: 19px;
    margin-top: 34px;
    margin-left: 37px;

    &:hover {
        cursor: pointer;
    }
`;
const Text = styled.div`
    font-size: 24px;
    margin-top: 61px;
    margin-left: 64px;
`;
const Text2 = styled.div`
    color:  #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    margin-top: 56px;
    margin-right: 325px;
`;
const Input= styled.input`
    display: flex;
    width: 372px;
    height: 41px;
    margin-top: 5px;
    align-items: center;
    margin-left: 65px;
    border: none;
    border-bottom: 1px solid #FDE047;

    &:focus {
    outline: none;
  }
`;
const Text3 = styled.div`
    color:  #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    margin-top: 56px;
    margin-right: 305px;
`;
const Button=styled.button`
    display: flex;
    width: 372px;
    padding: 13px 0px 12px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background:  #FDE047;
    border: none;
    color:#FFF;
    margin-left: 64px;
    margin-top: 105px;

    &:hover {
        cursor: pointer;
        background-color: #ffb300;
    }
`;
const Text4 = styled.div`
    color:  #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    margin-top: 15px;

    &:hover {
        cursor: pointer;
        
    }
`;
export default Login;
