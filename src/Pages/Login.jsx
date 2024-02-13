import { useNavigate } from "react-router";
import styled from "styled-components";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "@firebase/auth";

// id : gang@dev.com
// pwd : 123123

function Login() {

  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);

  const [email, setUserEmail] = useState('');
  const [password, setUserPwd] = useState('');

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const userEmail = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(`${errorMessage} 의 에러가 발생했습니다. 에러코드: ${errorCode}`)
      console.log(` 작성된 email은 ${userEmail}, credentail은 ${credential}`)
      // ...
    });








  const loggedIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('안녕하세요', user)
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
  background-color: #d5ceff;
  border: 1px solid #452ec4;
  border-radius: 10px;
  color: #4730cc;

`