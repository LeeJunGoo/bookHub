import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { join } from '../shared/redux/modules/userDataController';

function Join() {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const newSign = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        userNickName: nickName,
        userEmail: email
      });

      dispatch(
        join({
          uid: user.uid,
          email,
          nickName
        })
      );

      alert(`${nickName} 님 안녕하세요!`);
      navigate('/login');
    } catch (error) {
      const errorcode = error.code;
      const errorMessage = error.message;
      alert(`${errorMessage}과 같은 오류가 발생하였습니다. 올바른 패스워드를 입력해주세요.`);
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onNickNameHandler = (e) => {
    setNickName(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const goToHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <StToHome onClick={goToHome}>홈으로</StToHome>

      <StH2>회원가입</StH2>
      <StSection>
        <StUl>
          <li>
            <StPtag>이메일</StPtag>
            <StInput type="email" placeholder="이메일" value={email} onChange={onEmailHandler}></StInput>
          </li>
          <li>
            <StPtag>패스워드</StPtag>
            <StInput type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}></StInput>
          </li>
          <li>
            <StPtag>닉네임</StPtag>
            <StInput type="text" placeholder="닉네임" value={nickName} onChange={onNickNameHandler}></StInput>
          </li>
          <StDiv>
            <div>
              <StButtonJoin onClick={newSign}>회원가입하기</StButtonJoin>
            </div>

            <div>
              <StButtonLogin onClick={goToLogin}>로그인 하기</StButtonLogin>
            </div>
          </StDiv>
        </StUl>
      </StSection>
    </>
  );
}

export default Join;

const StH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-family: 'SOGANGUNIVERSITYTTF';
`;
const StInput = styled.input`
  padding: 10px;
  border-color: #141513;
  border-radius: 4px;
`;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 400px;
`;

const StPtag = styled.p`
  padding-bottom: 10px;
  font-weight: 900;
  font-family: 'SOGANGUNIVERSITYTTF';
`;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  margin: 10px;
`;

const StDiv = styled.div`
  display: flex;
  gap: 15px;
`;

const StButtonLogin = styled.button`
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  border-color: #c9c902;
  color: #ffffff;
  background-color: #c9c902;
  font-family: 'SOGANGUNIVERSITYTTF';

  &:hover {
    background-color: #eded08;
    border-color: #eded08;
  }
`;

const StButtonJoin = styled.button`
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  font-family: 'SOGANGUNIVERSITYTTF';
  border-color: #c9c902;
  color: #ffffff;
  background-color: #c9c902;

  &:hover {
    background-color: #eded08;
    border-color: #eded08;
  }
`;

const StToHome = styled.button`
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: 40px;
  border-color: #c9c902;
  color: #ffffff;
  background-color: #c9c902;
  font-family: 'SOGANGUNIVERSITYTTF';
  &:hover {
    background-color: #eded08;
    border-color: #eded08;
  }
`;
