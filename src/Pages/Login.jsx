import { useNavigate } from "react-router";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { addDoc, collection, getDoc, doc, setDoc, query, where, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "@firebase/auth";

// id : gang@dev.com
// pwd : 123123

function Login() {

  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setUserEmail] = useState('');
  const [password, setUserPwd] = useState('');

  const loggedIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(userCredential)
        console.log(`로그인이 완료됐습니다 id: ${email}, Uid ${user.uid}`)
        navigate(`/`)
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        alert(`${errorMessage} 의 오류가 발생했습니다. 에러코드: ${errorCode}`)
        navigate('/login')
      })

  }

  const onUserEmailHandler = (e) => {
    setUserEmail(e.target.value)
  }

  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value)
  }

  const goToJoinPage = () => {
    navigate('/join')
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <>
      <div>
        <StHeader>로그인
        </StHeader>
        <StMain>
          <StUl>
            <StLi>
              <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => onUserEmailHandler(e)}
              ></input>
            </StLi>
            <StLi>
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => onUserPwdHandler(e)}
              ></input>
            </StLi>
            <div>
              <StBtn onClick={(e) => loggedIn(e)}>로그인!</StBtn>
            </div>
          </StUl>
          <StBtn onClick={goToJoinPage}>회원가입하기</StBtn>
          <StBtn onClick={goToHome}>홈으로 가기</StBtn>
        </StMain>

      </div>
    </>)
}

export default Login;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 400px;
`

const StUl = styled.ul`
  position: relative;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 20%;
  min-width: 410px;
  min-height: 400px;
  border: 1px solid black;
  gap: 40px;
`

const StLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 15%;
  gap: 30px;

  input{
    gap: 30px;
    min-width: 400px;
    min-height: 30px;
  }
`

const StHeader = styled.header`
  display: flex ;
  justify-content: center;
  width: 100vw;
  height: 15vh;
  min-width: 400px;
`

const StBtn = styled.button`
  display: flex;
  justify-content:center;

`