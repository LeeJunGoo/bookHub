import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  query,
  getDocs,
  collection,
  doc,
  arrayUnion,
  updateDoc,
  FieldValue,
  getDoc,
  deleteDoc,
  addDoc
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { bookData } from '../shared/mockData';
function DetailPages() {
  const navi = useNavigate();
  // form내의 제목 내용을 저장하는 state
  const [reviewText, setReviewText] = useState(''); // 리뷰 내용
  const [reviewTitle, setReviewTitle] = useState(''); // 제목
  // 리뷰데이터를 저장하는 state
  const [reviewData, setReviewData] = useState([]);
  const [bookHubData, setBookHubData] = useState(bookData);
  // useParams 를 통해  id 가져오기
  const { id } = useParams();
  // console.log('id', id);
  // login  여부를 가리는  state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'reviews'));
        // console.log(q);
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs);
        const initialReviews = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(initialReviews);
        setReviewData(initialReviews);
        auth.onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(reviewData);
  // 리뷰를 추가하는 함수
  const addReView = async (event) => {
    event.preventDefault();
    // 리뷰 데이터는 로그인한 경우에만 추가할 수 있음
    const user = auth.currentUser;
    if (!user) {
      window.alert('로그인해주세요.');
      return;
    }
    try {
      const 리뷰데이터 = {
        createdAt: Date.now(),
        bookId: id,
        text: reviewText,
        title: reviewTitle,
        like: 0,
        userId: user.uid,
        uid: user.uid
      };
      const reviewRef = await addDoc(collection(db, 'reviews'), 리뷰데이터);
      console.log('리뷰가 저장되었습니다. Document ID:', reviewRef.id);
      setReviewData((prevState) => [...prevState, 리뷰데이터]);
      setReviewText('');
      setReviewTitle('');
    } catch (error) {
      console.error('Error adding review:', error);
      window.alert('리뷰를 추가하는 동안 오류가 발생했습니다.');
    }
  };
  console.log(reviewData);
  // 삭제 함수 구현
  const deleteReview = async (reviewId) => {
    try {
      await deleteDoc(doc(db, 'reviews', reviewId));
      console.log('리뷰가 성공적으로 삭제되었습니다.');
      // 삭제 후에 리뷰 데이터를 다시 불러와서 화면을 갱신할 수 있습니다.
      // refetchReviewData();
    } catch (error) {
      console.error('리뷰 삭제 중 오류 발생:', error);
      window.alert('리뷰를 삭제하는 동안 오류가 발생했습니다.');
    }
  };
  // 삭제 버튼 클릭 시 해당 리뷰를 삭제하는 함수
  const handleDeleteReview = async (reviewId) => {
    if (window.confirm('정말로 이 리뷰를 삭제하시겠습니까?')) {
      // 삭제 함수 호출
      await deleteReview(reviewId);
      navi('/');
    }
  };
  return (
    <>
      {/* 도서 관련 */}
      {bookHubData
        .filter((data) => data.itemId === Number(id))
        .map((data) => (
          <div>
            <img src={data.coverLargeUrl} alt="" />
            <div>
              <p>
                <span>{data.author}</span>
              </p>
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      {/* 입력 폼  */}
      {isLoggedIn === true ? (
        <form
          onSubmit={(event) => {
            addReView(event);
          }}
        >
          <input
            type="text"
            value={reviewTitle}
            onChange={(event) => setReviewTitle(event.target.value)}
            placeholder="title"
          />
          <textarea
            type="text"
            value={reviewText}
            onChange={(event) => setReviewText(event.target.value)}
            placeholder="text"
          />
          <button type="submit">추가하기</button>
        </form>
      ) : (
        <></>
      )}
      {/* 도서별 게시물 렌더링 */}
      {isLoggedIn === true ? (
        <>
          {reviewData
            .filter((data) => data.bookId === id)
            .map((data) => (
              <div key={data.userId}>
                <p>{data.title}</p>
                <p>{data.text}</p>
                <button
                  onClick={() => {
                    handleDeleteReview(data.id);
                  }}
                >
                  삭제하기
                </button>
              </div>
            ))}
        </>
      ) : (
        <>
          {reviewData
            .filter((data) => data.bookId === id)
            .map((data) => (
              <div key={data.userId}>
                <p>{data.title}</p>
                <p>{data.text}</p>
              </div>
            ))}
        </>
      )}
    </>
  );
}
export default DetailPages;