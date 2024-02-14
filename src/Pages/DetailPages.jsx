import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  query,
  getDocs,
  collection,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  getDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { bookData } from '../shared/mockData';
import styled from 'styled-components';

function DetailPages() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviewText, setReviewText] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewData, setReviewData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editReview, setEditReview] = useState(false);
  const [currentReviewId, setCurrentReviewId] = useState(null);
  const [newReviewText, setNewReviewText] = useState('');
  const [userInfo, setUserInfo] = useState({
    nickName: '',
    profileImg: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'reviews'));
      const querySnapshot = await getDocs(q);
      const initialReviews = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviewData(initialReviews);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUserInfo({
            nickName: userData.userNickName || '익명',
            profileImg: userData.profileImageUrl || 'null'
          });
        } else {
          setUserInfo({ nickName: '', profileImg: '' });
        }
      } else {
        setUserInfo({ nickName: '', profileImg: '' });
      }
    });
    return () => unsubscribe();
  });

  const addReView = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      window.alert('로그인해주세요.');
      return;
    }

    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const reviewDataToAdd = {
          createdAt: Date.now(),
          itemId: id,
          text: reviewText,
          title: reviewTitle,
          uid: user.uid,
          userNickName: userData.userNickName,
          userProfileImg: userData.profileImageUrl
        };

        const reviewRef = await addDoc(collection(db, 'reviews'), reviewDataToAdd);

        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          reviews: arrayUnion(reviewRef.id)
        });

        setReviewData((prevState) => [...prevState, { ...reviewDataToAdd, id: reviewRef.id }]);
        setNewReviewText('');
        setReviewTitle('');
        alert('리뷰를 등록했어요!');
      } else {
        alert('사용자를 찾을 수 없어요..');
      }
    } catch (error) {
      console.error('Error adding review:', error);
      window.alert('리뷰를 추가하는 동안 오류가 발생했습니다.');
    }
  };

  const deleteReview = async (reviewId) => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        reviews: arrayRemove(reviewId)
      });
    } catch (error) {
      console.error('리뷰 삭제 중 오류 발생:', error);
      window.alert('리뷰를 삭제하는 동안 오류가 발생했습니다.');
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      await deleteReview(reviewId);
      navigate('/');
    }
  };

  const onChangeReview = async (id) => {
    if (!id) return;

    try {
      const reviewDocRef = doc(db, 'reviews', id);

      await updateDoc(reviewDocRef, {
        text: reviewText
      });
      setReviewData((currentData) =>
        currentData.map((review) => (review.id === id ? { ...review, text: reviewText } : review))
      );
      alert('리뷰 수정을 완료했어요!');
      setEditReview(false);
      setCurrentReviewId(null);
    } catch (error) {
      console.error('리뷰 수정에 실패했어요.', error);
      alert('리뷰 업데이트 중 오류가 발생했습니다.');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleEditClick = (id, text) => {
    setCurrentReviewId(id);
    setReviewText(text);
  };

  return (
    <>
      <button onClick={goToHome}>홈버튼</button>
      <StSection>
        {bookData
          .filter((data) => data.itemId === Number(id))
          .map((data) => (
            <StDiv key={data.itemId}>
              <StImg src={data.coverLargeUrl} alt="" />
              <StDiv2>
                <StSpan>
                  <p>{data.title}</p>
                  <p>{data.author}</p>
                </StSpan>
                <span>{data.description}</span>
              </StDiv2>
            </StDiv>
          ))}
      </StSection>
      <StSection2>
        {isLoggedIn === true ? (
          <>
            {reviewData
              .filter((data) => data.itemId === id)
              .map((data) => (
                <StDiv4 key={data.id}>
                  {currentReviewId === data.id ? (
                    <>
                      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                      <button onClick={() => onChangeReview(data.id)}>수정 완료</button>
                      <button
                        onClick={() => {
                          setEditReview(false);
                          setCurrentReviewId(null);
                        }}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <StDiv5>
                        <StImg2 src={data.userProfileImg || 'defaultProfileImagePath'} alt="profile" />
                        <p>{data.userNickName || '익명'}</p>
                      </StDiv5>
                      <p>리뷰내용 : {data.text}</p>
                      <button
                        onClick={() => {
                          handleEditClick(data.id, data.text);
                        }}
                      >
                        수정하기
                      </button>
                      <button onClick={() => handleDeleteReview(data.id)}>삭제하기</button>
                    </>
                  )}
                </StDiv4>
              ))}
          </>
        ) : (
          <>
            {reviewData
              .filter((data) => data.itemId === id)
              .map((data) => (
                <StDiv4 key={data.userId}>
                  <p>{data.title}</p>
                  <p>{data.text}</p>
                </StDiv4>
              ))}
          </>
        )}
      </StSection2>
      <StSection3>
        <StDiv3>
          {isLoggedIn === true ? (
            <form
              onSubmit={(event) => {
                addReView(event);
              }}
            >
              <StImg2 src={userInfo.profileImg} alt="Profile" />
              <p>{userInfo.nickName}</p>
              <textarea
                type="text"
                value={newReviewText}
                onChange={(event) => setNewReviewText(event.target.value)}
                placeholder="리뷰"
              />
              <button type="submit">추가하기</button>
            </form>
          ) : (
            <></>
          )}
        </StDiv3>
      </StSection3>
    </>
  );
}
export default DetailPages;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 150px;
`;

const StDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 80%;
  max-width: 1600px;
  min-width: 700px;
  gap: 50px;
  padding: 50px;
`;

const StImg2 = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const StImg = styled.img`
  width: 220px;
  min-width: 220px;
  height: 320px;
`;

const StDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 100px;

  p {
    gap: 15px;
    line-height: 1.3;
    font-size: 20px;
  }
`;

const StSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StSection3 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StDiv3 = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 50px;
  border: 1px solid black;

  form {
    display: flex;
    width: 80%;
    gap: 40px;
    input {
      width: 200px;
      height: 40px;
      font-size: 1rem;
    }
    textarea {
      width: 700px;
      height: 40px;
      font-size: 1rem;
    }
  }
`;

const StSection2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 20%;
  margin-bottom: 150px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

const StDiv4 = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
  width: 700px;

  p {
    gap: 15px;
    line-height: 1.3;
    font-size: 20px;
  }
`;

const StDiv5 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`;
