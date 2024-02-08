import { useNavigate } from "react-router";
import { userData } from "../shared/mockData";
import styled from "styled-components";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

import { bookData } from "../shared/mockData";

console.log(bookData)

function Login() {

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');


  const auth = getAuth();
  signInWithEmailAndPassword(auth, 'andatne1104@naver.com', 'sudal123')
    .then((userCredential) => {
      const user = userCredential.user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
    })


  const loggedIn = () => {
    navigate('/myPage/:id')
  }

  const onUserEmailHandler = (e) => {
    setUserEmail(e.target.value)
  }

  const onUserPwdHandler = (e) => {
    console.log(e)
    setUserPwd(e.target.value)
  }


  const goToJoinPage = () => {
    navigate('/join')
  }






  return (
    <>
      <div>
        <StHeader>로그인</StHeader>
        <StMain>
          <StUl>
            <li>
              <input
                type="text"
                placeholder="이메일"
                value={userEmail}
                onChange={(e) => onUserEmailHandler(e)}
              ></input>
            </li>
            <li>
              <input
                type="password"
                placeholder="비밀번호"
                value={userPwd}
                onChange={(e) => onUserPwdHandler(e)}
              ></input>
            </li>
            <div>
              <button onClick={loggedIn}>로그인!</button>
            </div>
          </StUl>
          <StBtn onClick={goToJoinPage}>회원가입하기</StBtn>
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
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 200px;
  border: 1px solid black;
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