import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { join } from '../shared/redux/modules/userDataController';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

function Join() {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  const storage = getStorage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');

  const newSign = async (e) => {
    e.preventDefault();
    const defaultImageRef = ref(storage, 'defaultProfile.png')
    console.log(defaultImageRef)

    try {
      const profileImage = await getDownloadURL(defaultImageRef);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        userNickName: nickName,
        userEmail: email,
        profileImageUrl: profileImage,
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
      <StHeader>
        <SectionTitle onClick={() => goToHome()}>BookHub</SectionTitle>
      </StHeader>
      <StSection2>
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
            <StButtonJoin onClick={newSign}>회원가입하기</StButtonJoin>
            <StButtonLogin onClick={goToLogin}>로그인 하기</StButtonLogin>
          </StDiv>
        </StForm>
      </StSection2>
    </>
  );
}

export default Join;


const StHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  
`

const SectionTitle = styled.button`
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
  width: 400px;
  height: 45px;
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
  position: relative;
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



const StButtonLogin = styled.button`
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  height: 48px;
  font-size: 1rem;
  border-color: #f6e58d;
  color: #141514;
  background-color: #f6e58d;;
  font-family: 'SOGANGUNIVERSITYTTF';
  cursor: pointer;

  &:hover {
  cursor: pointer;
  background-color: #f9d803;
  border-color: #f9d803;
}
`;


const StButtonJoin = styled.button`
padding: 10px 15px 12px;
height: 48px;
font-size: 1rem;
line-height: 24px;
border-radius: 5px;
width: 400px;
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
