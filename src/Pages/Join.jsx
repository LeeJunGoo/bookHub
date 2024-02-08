import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';




function Join() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');



  const newSign = () => {
    createUserWithEmailAndPassword(auth, "andatne1104@naver.com", 'sudal123')
    navigate('/login')
  }




  const onEmailHandler = (e) => {
    console.log('이메일', e.target.value)
    setEmail(e.target.value)
  }

  const onNickNameHandler = (e) => {
    setNickName(e.target.value)
  }

  const onPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const goToHome = () => {
    navigate('/')
  }


  return (
    <>
      <button onClick={goToHome}>홈으로</button>

      <StH2>회원가입</StH2>
      <StSection>
        <StUl>
          <li>
            <label>이메일</label>
            <input
              type='email'
              placeholder='이메일'
              onChange={onEmailHandler}
            ></input>
          </li>
          <li>
            <label>패스워드</label>
            <input
              type='password'
              placeholder='비밀번호'
              onChange={onPasswordHandler}
            ></input>
          </li>
          <li>
            <label>닉네임</label>
            <input
              type='text'
              placeholder='닉네임'
              onChange={onNickNameHandler}
            ></input>
          </li>
          <div>
            <button onClick={newSign}>회원가입하기</button>
          </div>
          <StDiv>
            <span>
              <button>깃허브 가입</button>
            </span>
            <span>
              <button>구글 가입</button>
            </span>
          </StDiv>
        </StUl>
        <ol></ol>
      </StSection>
    </>
  )
}

export default Join



const StH2 = styled.h2`
  display: flex;
  justify-content: center;
  
`

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 400px;
`

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  border: 1px solid black;
`

const StDiv = styled.div`
  display: flex;
  gap: 15px;
`