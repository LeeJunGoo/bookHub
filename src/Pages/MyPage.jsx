import { useNavigate } from 'react-router'
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { QuerySnapshot, collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
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
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [userEditForm, setUserEditForm] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {

        async function fetchDefaultImage() {
          const defaultImageRef = ref(storage, 'defaultProfile.png');
          try {
            return await getDownloadURL(defaultImageRef);
          } catch (error) {
            console.error('이미지를 가져오지 못했어요.', error)
            return '';
          }
        }
        const fetchUserData = async (userId) => {
          const q = query(collection(db, 'users'), where('uid', '==', userId))
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            setUserDetails({ userNickName: userData.userNickName, userEmail: userData.userEmail })
            setImageUrl(userData.profileImageUrl || (await fetchDefaultImage()));
          } else {
            console.log('사용자 문서가 없습니다. 기본 값을 사용합니다.');
            const defaultImageUrl = await fetchDefaultImage();
            setImageUrl(defaultImageUrl);
          }
        };
        fetchUserData(currentUser.uid);
      } else {
        navigate('/login')
      }
    });
    setLoading(false)

    return () => unSubscribe();
  }, [])


  const toggleEditForm = () => {
    setNickName('')
    setEmail('')
    setUserEditForm(!userEditForm);
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

  const userDetailUpdateHandler = async () => {

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
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);


        const q = query(collection(db, 'users'), where('uid', '==', auth.currentUser.uid))
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {

          const userDocRef = querySnapshot.docs[0].ref
          await updateDoc(userDocRef, {
            profileImageUrl: downloadURL,
          });
          alert('이미지 업로드에 성공하였습니다!')

        } else {
          console.log('문서가 사라지는 오류')
        }
        // setSelectedFile(null)
        // setPreviewUrl(null)
      } catch (error) {
        console.error('이미지 업로드에 실패했어요', error)
      }
    }

    const updateUserData = async () => {
      if (!auth.currentUser) return;

      const q = query(collection(db, 'users'), where('uid', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userDocRef = querySnapshot.docs[0].ref;
        try {
          await updateDoc(userDocRef, {
            userNickName: nickName,
            userEmail: email,
          });
          setUserDetails({ ...userDetails, userNickName: nickName, userEmail: email });
          alert('업데이트 완료!');
        } catch (error) {
          console.error('업데이트에 실패했어요', error);
        }
      } else {
        console.log('문서를 찾을 수 없어요');
      }

    };
    await uploadImage();
    await updateUserData();
    toggleEditForm();
  }

  const LoggedOut = () => {
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
              <p>닉네임 : {userDetails ? userDetails.userNickName : 'Loading...'}</p>
              <p>이메일 : {userDetails ? userDetails.userEmail : 'Loading...'}</p>
            </StLi>
            {userDetails ? (
              <StDiv3>
                <button onClick={toggleEditForm}>프로필 수정하기</button>
                {userEditForm && (
                  <>
                    <div>
                      {previewUrl && <StImg src={previewUrl} alt="Profile Preview" />}
                      <input type='file' onChange={onChangeProfileImage} ref={fileInputRef} />
                    </div>
                    <input
                      type='text'
                      placeholder='닉네임'
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                    />
                    <input
                      type='email'
                      placeholder='이메일'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={userDetailUpdateHandler}>확인버튼</button>
                  </>
                )}
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
      <button onClick={LoggedOut}> 로그아웃 </button>
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
  height: 100%;
  padding: 50px;
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
  margin-top: 100px;

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
  border-radius: 50%;
  
`