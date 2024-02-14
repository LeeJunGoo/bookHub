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
      <StSection2>
        <SectionTitle onClick={() => goToHome()}>BookHub</SectionTitle>

        <StForm>
          <StList>
            <StInputName>
              <StInputLabel>이메일</StInputLabel>
              <StInput type="email" placeholder="이메일" value={email} onChange={onEmailHandler}></StInput>
            </StInputName>
          </StList>
          <StList>
            <StInputName>
              <StInputLabel>비밀번호</StInputLabel>
              <StInput type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}></StInput>
            </StInputName>
          </StList>
          <StList>
            <StInputName>
              <StInputLabel>닉네임</StInputLabel>
              <StInput type="text" placeholder="닉네임" value={nickName} onChange={onNickNameHandler}></StInput>
            </StInputName>
          </StList>
          <StDiv>
            <StButton onClick={newSign}>회원가입하기</StButton>
            <StButtonJoin onClick={goToLogin}>로그인 하기</StButtonJoin>
          </StDiv>
        </StForm>
      </StSection2>
    </>
  );
}

export default Join;

const SectionTitle = styled.h1`
  font-family: 'TTHakgyoansimSamulhamR';
  margin: 40px;
  padding: 20px;
  border-radius: 15px;
  background-color: transparent;
  border: transparent;
  font-size: 50px;

  &:hover {
    background-color: #6ea477;
    transition: 0.5s;
  }
`;

const StInput = styled.input`
  border-color: #141513;
  border-radius: 4px;
  width: 358px;
  height: 46px;
`;

const StInputLabel = styled.p`
  margin-left: 1px;
  margin-bottom: 10px;
`;

const StList = styled.div`
  margin-right: 50px;
`;

const StSection2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 400px;
  margin-bottom: 100px;
`;

const StInputName = styled.label`
  padding-bottom: 10px;
  font-weight: 900;
  font-family: 'SOGANGUNIVERSITYTTF';
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 400px;
  border-radius: 10px;

  margin: 10px;
  position: absolute;
  top: 150px;
  width: 700px;
  height: 700px;
`;

const StDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

const StButton = styled.button`
  padding: 10px 15px 12px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  width: 368px;
  height: 48px;
  border-color: #f6e58d;
  color: #141514;
  background-color: #f6e58d;
  font-family: 'SOGANGUNIVERSITYTTF';

  &:hover {
    cursor: pointer;
    background-color: #f9d803;
    border-color: #f9d803;
  }
`;

const StButtonHome = styled.button`
  padding: 10px 15px 12px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  width: 368px;
  height: 48px;
  border-color: #f6e58d;
  color: #141514;
  background-color: #f6e58d;
  font-family: 'SOGANGUNIVERSITYTTF';

  &:hover {
    cursor: pointer;
    background-color: #f9d803;
    border-color: #f9d803;
  }
`;

const StButtonJoin = styled.button`
  padding: 10px 15px 12px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
  width: 368px;
  height: 48px;
  border-color: #f6e58d;
  color: #141514;
  background-color: #f6e58d;
  font-family: 'SOGANGUNIVERSITYTTF';

  &:hover {
    cursor: pointer;
    background-color: #f9d803;
    border-color: #f9d803;
  }
`;
