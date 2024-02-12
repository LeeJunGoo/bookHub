import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

import { bookData } from '../shared/mockData';

console.log(bookData);

// id : gang@dev.com
// pwd : 123123

console.log(userData);

function Login() {
  const navigate = useNavigate();

  const auth = getAuth();

  const [email, setUserEmail] = useState('');
  const [password, setUserPwd] = useState('');

  const loggedIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        console.log(`로그인이 완료됐습니다 id: ${email}, Uid ${user.uid}`);
        navigate(`/mypage/${user.uid}`);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        navigate('/login');
        alert(`${errorMessage} 의 오류가 발생했습니다. 에러코드: ${errorCode}`);
      });
  };

  const onUserEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const onUserPwdHandler = (e) => {
    console.log(e);
    setUserPwd(e.target.value);
  };

  const goToJoinPage = () => {
    navigate('/join');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <StHeader>로그인</StHeader>
        <StMain>
          <ul>
            <li>
              <label>이메일</label>
              <input type="text" placeholder="이메일을 입력해주세요."></input>
            </li>
            <li>
              <label>패스워드</label>
              <input type="password" placeholder="패스워드를 입력해주세요."></input>
            </li>
            <button>로그인!</button>
          </ul>
          <StBtn onClick={goToJoinPage}>회원가입하기</StBtn>
          <StBtn onClick={goToHome}>홈으로 가기</StBtn>
        </StMain>
      </div>
    </>
  );
}

export default Login;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 400px;
`;

const StHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 15vh;
  min-width: 400px;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
`;
