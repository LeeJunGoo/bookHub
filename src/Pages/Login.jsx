import { useNavigate } from "react-router";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { addDoc, collection, getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
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

import gitHub from '../styles/gitHub.png';







function Login() {

  const navigate = useNavigate();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [email, setUserEmail] = useState('');
  const [password, setUserPwd] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const addGoogleAccount = async () => {
    signInWithRedirect(auth, googleProvider);
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          const user = result.user;
          const providerId = result.providerId;
          const userRef = doc(db, 'users', user.uid)
          const docSnap = await getDoc(userRef)

          if (docSnap.exists()) {
            await updateDoc(userRef, {
              lastLogin: new Date(),
            });
          } else {
            let etc = '';
            if (providerId === 'google.com') {
              etc = 'Google로 로그인 한 회원입니다.';
            } else if (providerId === 'github.com') {
              etc = 'Github으로 로그인 한 회원입니다.';
            }
            await setDoc(userRef, {
              uid: user.uid,
              userNickName: user.displayName,
              userEmail: user.email,
              etc: etc,
              created: new Date(),
            });
          }
          alert(`${user.displayName ? `${user.displayName}님, 환영합니다!` : `환영합니다! 마이페이지에서 귀하의 닉네임을 설정해주시겠어요?`}`);
          navigate('/')
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} 의 에러가 발생했습니다. 에러코드: ${errorCode}`)
      });
    setIsLoading(false)
  }, [])


  const addGithubAccount = async () => {
    signInWithRedirect(auth, githubProvider);

  }

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          const user = result.user;
          await addDoc(collection(db, 'users'), {
            uid: user.uid,
            userNickName: user.displayName,
            userEmail: user.email,
            etc: 'Github 으로 로그인 한 회원입니다.'
          });
          alert(`깃허브를 통해 찾아주셔서 반갑습니다!`)
          navigate('/')
        }
      }).catch((error) => {
        alert('오류가 발생했습니다', error)
      })
  }, [])

  const loggedIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert(`환영합니다!`)
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

  if (isLoading) {
    return <div>현재 상태는 로딩중일지도
    </div>
  }

  return (
    <>
      <div>
        <StHeader>BookHub
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
            
              <StBtn onClick={(e) => loggedIn(e)}>로그인!</StBtn>
              <loginBtnWrapper>
              <Altloginbutton1 onClick={addGoogleAccount}>  
              <img src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"/>
              </Altloginbutton1>
              <Altloginbutton2 onClick={addGithubAccount}>  <img src={gitHub} />
              </Altloginbutton2>
            </loginBtnWrapper>

          </StUl>
          <StBtnWrapper>
            <StBtn2 onClick={goToJoinPage}>회원가입하기</StBtn2><br/>
            <StBtn3 onClick={goToHome}>홈으로 가기</StBtn3>

          </StBtnWrapper>
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

`;

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
`;

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
`;

const StHeader = styled.header`
  display: flex ;
  justify-content: center;
  height: 15vh;
  min-width: 400px;
  
  font-family: 'TTHakgyoansimSamulhamR';
  padding: 20px;
  border-radius: 15px;
  background-color: transparent;
  border: transparent;
  font-size: 40px;
  line-height:1.2;
  margin-top : 10px;

`;

const loginBtnWrapper= styled.div`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;


`;
const Altloginbutton1 = styled.button`
  justify-content:center;
  align-items: center;
  min-block-size: 1cm;
  border-style: hidden;
  border-radius: 10px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';
  min-width: 0.5cm;


`;


const Altloginbutton2 = styled.button`
  justify-content:center;
  align-items: center;
  min-block-size: 1cm;
  border-style: hidden;
  border-radius: 10px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';
  min-width: 0.5cm;


`;

// const altloginBtn1 = styled.button`

// `;

// const altloginBtn2 = styled.button`

// `;


const StBtn = styled.button`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  width: 130px;
  height: 50px;
  font-size: 1.1rem;
  background-color: #f6e58d;
  border: 1px solid #f6e58d;
  border-radius: 10px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';


`;

const StBtnWrapper = styled.div`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  margin : 30px 0px 30px 0px;


`;


const StBtn2 = styled.button`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  width: 130px;
  height: 50px;
  font-size: 1.1rem;
  background-color: #f6e58d;
  border: 1px solid #f6e58d;
  border-radius: 10px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';
  margin : 10px 10px 10px 10px;


`;




const StBtn3 = styled.button`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  width: 130px;
  height: 50px;
  font-size: 1.1rem;
  background-color: #f6e58d;
  border: 1px solid #f6e58d;
  border-radius: 10px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';
  margin : 10px 10px 10px 10px;


`;
