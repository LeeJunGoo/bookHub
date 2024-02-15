import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { addDoc, collection, getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import gitHubImage from '../styles/gitHub.png';
import google from '../styles/google.svg'
import {
  getAuth,
  signInWithEmailAndPassword,
  getRedirectResult,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';

// id : gang@dev.com
// pwd : 123123

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
  };

  const addGithubAccount = async () => {
    signInWithRedirect(auth, githubProvider);
  };

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          const user = result.user;
          const providerId = result.providerId;
          const userRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            await updateDoc(userRef, {
              lastLogin: new Date()
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
              created: new Date()
            });
          }
          alert(
            `${user.displayName
              ? `${user.displayName}님, 환영합니다!`
              : `환영합니다! 마이페이지에서 귀하의 닉네임을 설정해주시겠어요?`
            }`
          );
          navigate('/');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} 의 에러가 발생했습니다. 에러코드: ${errorCode}`);
      });
    setIsLoading(false);
  }, []);

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
          alert(`깃허브를 통해 찾아주셔서 반갑습니다!`);
          navigate('/');
        }
      })
      .catch((error) => {
        alert('오류가 발생했습니다', error);
      });
  }, []);

  const loggedIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        alert(`${user.userNickName}님, 환영합니다!`);
        navigate(`/`);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorMessage} 의 오류가 발생했습니다. 에러코드: ${errorCode}`);
        navigate('/login');
      });
  };

  const onUserEmailHandler = (e) => {
    setUserEmail(e.target.value);
  };

  const onUserPwdHandler = (e) => {
    setUserPwd(e.target.value);
  };

  const goToJoinPage = () => {
    navigate('/join');
  };

  const goToHome = () => {
    navigate('/');
  };

  if (isLoading) {
    return <div>현재 상태는 로딩중일지도</div>;
  }

  return (
    <>
      <StHeader>
        <HeaderTitle onClick={goToHome}>BookHub</HeaderTitle>
      </StHeader>
      <StMain>
        <StUl>
          <StLi>
            <input type="text" placeholder="이메일" value={email} onChange={(e) => onUserEmailHandler(e)}></input>
          </StLi>
          <StLi>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => onUserPwdHandler(e)}
            ></input>
          </StLi>
          <StDiv2>
            <StBtn onClick={(e) => loggedIn(e)}> 이메일로 로그인!</StBtn>
            <StBtn2 bg={'#69a0f8'} onClick={addGoogleAccount}>
              <StImg src={google} alt='null' />구글 로그인
            </StBtn2>
            <StBtn2 bg={'#cfabff'} onClick={addGithubAccount}>
              <StImg src={gitHubImage} alt='null' />깃허브 로그인
            </StBtn2>
          </StDiv2>
          <StDiv3>
            <StBtn3 onClick={goToJoinPage}>회원가입하기</StBtn3>
            <StBtn3 onClick={goToHome}>홈으로 가기</StBtn3>
          </StDiv3>
        </StUl>
      </StMain>
    </>
  );
}

export default Login;


const StHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`

const HeaderTitle = styled.button`
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
`


const StMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 400px;
  margin-bottom: 200px;
`;

const StUl = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 60%;
  min-width: 430px;
  max-width: 720px;
  min-height: 400px;
  border: 1px solid #846b17a9;
  gap: 40px;
  border-radius: 15px;
  padding: 20px;
  background-color: #f9fce1;
`

const StLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  input {
    gap: 30px;
    min-width: 400px;
    min-height: 35px;
    padding: 0.1rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #e4c83b;;
  }
`;



const StDiv2 = styled.div`
  display: flex;
  min-width: 400px;
  gap:30px;
  flex-direction: column;
  justify-content: space-between;
`

const StBtn = styled.button`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  width: 400px;
  height: 40px;
  font-size: 1.1rem;
  background-color: #F6E58D;
  border: 1px solid #F6E58D;
  border-radius: 5px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';


  &:hover {
    background-color: #1d1c19;
    color: #cbcbcb;
    transition: 0.5s;
  }
  `


const StBtn2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  border: transparent;
  border-radius: 5px;
  background-color: ${(props) => props.bg || '#ece6f1'};
  font-family: 'SOGANGUNIVERSITYTTF' ;
  font-size: 1.1rem;


`


const StDiv3 = styled.div`
  display: flex;
  gap: 80px;
  padding: 20px;
`

const StBtn3 = styled.button`
  display: flex;
  flex-direction : row;
  justify-content:center;
  align-items: center;
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  background-color: #F6E58D;
  border: 1px solid #F6E58D;
  padding: 5px;
  border-radius: 5px;
  color: #313131;
  font-family: 'SOGANGUNIVERSITYTTF';


  &:hover {
    background-color: #1d1c19;
    color: #cbcbcb;
    transition: 0.5s;
  }
  


  
`

const StImg = styled.img`
width: 25px;
height: 25px;
margin-right: 15px;
object-fit: contain;
`