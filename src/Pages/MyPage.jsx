import { useNavigate } from 'react-router'
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

function MyPage() {

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const storage = getStorage();
  const auth = getAuth();

  const [userDetails, setUserDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
        console.log('데이터를 받아오는데 성공했을지도?', currentUser)
      } else {
        navigate('/login')
      }
      setLoading(false)
    });

    return () => unSubscribe();
  }, [])


  async function fetchDefaultImage() {
    const defaultImageRef = ref(storage, 'profile.png');
    try {
      return await getDownloadURL(defaultImageRef);
    } catch (error) {
      console.error('이미지를 가져오지 못했어요.', error)
      return '';
    }
  }

  const fetchUserData = async (userId) => {
    const userDocRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserDetails({ userNickName: userData.nickName, userEmail: userData.email })
      setImageUrl(userData.profileImageUrl || (await fetchDefaultImage()));
    } else {
      console.log('사용자 문서가 없습니다. 기본 값을 사용합니다.');
      const defaultImageUrl = await fetchDefaultImage();
      setImageUrl(defaultImageUrl);

    }
  };

  const onChangeProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file)
    }
  }

  const uploadImage = async () => {
    if (!selectedFile) {
      alert('이미지를 선택해주세요');
      return;
    }

    const timestamp = new Date().getTime();
    const originalFileName = `profileImg/${auth.currentUser.uid}/${timestamp}.jpg`
    const storageRef = ref(storage, originalFileName);

    try {
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storage.ref);

      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        profileImageUrl: downloadURL,
      });
      alert('이미지 업로드에 성공하였습니다!')
      setImageUrl(downloadURL);
      setSelectedFile(null)
      setPreviewUrl(null)
    } catch (error) {
      console.error('이미지 업로드에 실패했어요', error)
    }
  }

  const goToLogin = () => {
    signOut(auth).then(() => {
      navigate('/login')
      alert('로그아웃에 성공하였습니다.')

    }).catch((error) => {
      console.error('로그아웃에 실패함', error)
    })
  }

  const goToHome = () => {
    navigate('/')
  }

  if (loading) {
    return <div>현재 상태는 로딩중일지도
      {console.log('로딩중입니다')}
    </div>
  }

  return (
    <StMain>MyPage
      <button onClick={goToHome}>홈버튼</button>
      <StSection>
        <StDiv>
          <StUl>
            <StLi>프로필
              {imageUrl && <StImg src={imageUrl} alt='Profile' />}
              <div>
                {previewUrl && <StImg src={previewUrl} alt="Profile Preview" />}
                <input type='file' onChange={onChangeProfileImage} ref={fileInputRef} />
                <button onClick={uploadImage}>확인버튼</button>
              </div>
            </StLi>
            {userDetails ? (
              <StDiv3>
                <span>
                  닉네임 :{userDetails.userNickName}
                </span>
                <span>
                  이메일 : {userDetails.userEmail}
                </span>
              </StDiv3>
            ) : (
              <span>사용자 정보가 전달되지 않았어요</span>
            )}
          </StUl>
        </StDiv>
      </StSection>
      <StSection2>
        <StDiv2>
          <label>
            내가 작성한 리뷰
          </label>
          <StUl2>
            <li>영화1</li>
            <li>영화2</li>
            <li>영화3</li>
            <li>영화4</li>
            <li>영화5</li>
          </StUl2>
        </StDiv2>
      </StSection2>
      <button onClick={goToLogin}> 로그아웃 </button>
    </StMain>
  )
}

export default MyPage



const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
`

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 650px;
  min-width: 600px;
  height: 60%;
  border: 1px solid black;
  gap :20px;
  padding: 20px 5px;
`

const StSection2 = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  border: 1px solid black;
`


const StDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  
`

const StLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  
`

const StDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const StUl2 = styled.ul`
  display: flex;
  gap: 30px;
  min-height: 400px;
  
`

const StDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px
  ;

  span{
    display: flex;
    justify-content: center;
  }
  
`

const StImg = styled.img`
  width: 120px; 
  height: 120px;
  object-fit: cover;
  
`