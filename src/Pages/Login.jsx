import { useNavigate } from 'react-router';
import { userData } from '../shared/mockData';
import styled from 'styled-components';

console.log(userData);

function Login() {
  const navigate = useNavigate();

  const goToJoinPage = () => {
    navigate('/join');
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
