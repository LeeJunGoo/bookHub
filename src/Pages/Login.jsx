import { useNavigate } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";

import { bookData } from "../shared/mockData";

console.log(bookData)

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
        console.log(`로그인이 완료됐습니다 id: ${email}, pwd: ${password}`)
        navigate(`/myPage/id`)
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        navigate('/login')
        alert(`${errorMessage} 의 오류가 발생했습니다. 에러코드: ${errorCode}`)
      })

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
                value={email}
                onChange={(e) => onUserEmailHandler(e)}
              ></input>
            </li>
            <li>
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => onUserPwdHandler(e)}
              ></input>
            </li>
            <div>
              <button onClick={(e) => loggedIn(e)}>로그인!</button>
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