import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  updateDoc,
  doc,
  query,
  getDocs,
  collection,
  getDoc,
  deleteDoc,
  where,
  Firestore,
  FieldValue,
  deleteField
} from 'firebase/firestore';
import { db, auth } from '../firebase';
import { bookData } from '../shared/mockData';

function DetailPages() {
  const navigate = useNavigate();
  const [bookHubData, setBookHubData] = useState(bookData);
  const [userPostViewData, setUserPostViewData] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const { id } = useParams();

  const addReview = async (event) => {
    event.preventDefault();
    // 사용자 로그인 여부 확인
    // (실제로는 이 부분을 로그인 상태 확인 로직으로 변경해야 합니다.)
    const isLoggedIn = true;

    if (isLoggedIn) {
      const reviewData = {
        createdAt: Date.now(),
        title: postTitle,
        text: postText,
        id: crypto.randomUUID(),
        like: 0,
        itemId: id
      };

      setUserPostViewData((prev) => [...prev, reviewData]);

      setPostText('');
      setPostTitle('');

      // 현재 로그인된 사용자의 ID (예시로 고정된 값 사용)
      const userId = 'EgTwNS1c2OKdbGQMGF5t';

      // 해당 사용자의 데이터 가져오기
      const userDocRef = doc(db, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // 기존 리뷰 데이터 가져오기 (없으면 빈 배열로 초기화)
        const existingReviews = userDocSnapshot.data().reviews || [];

        // 새 리뷰 추가
        const updatedReviews = [...existingReviews, reviewData];

        // 사용자 데이터 업데이트
        await updateDoc(userDocRef, { reviews: updatedReviews });
        console.log('리뷰가 성공적으로 사용자 데이터에 추가되었습니다.');
      } else {
        console.error('해당 사용자의 데이터를 찾을 수 없습니다.');
      }
    } else {
      window.alert('로그인해주세요');
      navigate(`/login`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);
        const initialReviews = [];

        querySnapshot.forEach((doc) => {
          initialReviews.push({ id: doc.id, ...doc.data() });
        });

        setUserPostViewData(initialReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchData();
  }, []);

  //   (collectionName, documentId, reviewIdToDelete) =   (컬렉션 이름 , 가져와야하는 문서 Id  , 삭제될  리뷰 아이디 )
  const deleteButtonClick = async (collectionName, documentId, reviewIdToDelete) => {
    try {
      // collection ->  doc -> field ->  reviews id  가 없는 데이터 를 반환

      // 참조할 문서 가져오기
      const docRef = doc(db, collectionName, documentId);
      console.log(docRef);

      // 문서의 정보와 메서드를 getDoc로 가져와서 저장
      const docSnapshot = await getDoc(docRef);
      console.log(docSnapshot);

      // 정보와 메서드가 존재하지 않는다면
      if (!docSnapshot.exists()) {
        // 에러를 출력하고 종료
        console.error('문서를 찾을 수 없습니다.');
        return;
      }

      // 문서의 정보와 메서드를 가지고 있는  스냅샷의  data 를 객체로  저장
      const documentData = docSnapshot.data();
      console.log(documentData);

      //   documentDat 에 reviews 가 존재한다면
      if (documentData.reviews) {
        // 삭제할 리뷰 데이터를  필터링해서 제외한 배열 저장
        const updatedReviews = documentData.reviews.filter((review) => review.id !== reviewIdToDelete);

        // 120번째 배열로 reviews 를 업데이트
        await updateDoc(docRef, { reviews: updatedReviews });

        // 자동  새로고침 후  반영
        navigate(`/detail/${id}`);

        console.log('리뷰가 성공적으로 삭제되었습니다.');
      } else {
        console.error('리뷰 데이터를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('리뷰 삭제 중 오류:', error);
    }
  };
  return (
    <>
      {bookHubData
        .filter((data) => data.itemId === Number(id))
        .map((book) => (
          <div key={book.itemId}>
            <img src={book.coverSmallUrl} alt="" />
            <div>
              <p>{book.title}</p>
              <p>{book.customerReviewRank}</p>
            </div>
            <div>
              <p>{book.description}</p>
              <p>{book.author}</p>
              <p>{book.publisher}</p>
            </div>
          </div>
        ))}

      {/* 
      reviews데이터가 존재하는 데이터만 가져오기 -> 
      reviews데이터가 없는  데이터는 의미 없다. */}

      {userPostViewData.map((data) =>
        data.isLoggedIn === true ? (
          <>
            {userPostViewData.map(
              (userData) =>
                userData.reviews &&
                userData.reviews.map((reviewData) => (
                  <div key={reviewData.id}>
                    <p>{reviewData.title}</p>
                    <p>{reviewData.text}</p>
                    <button onClick={() => deleteButtonClick('users', userData.id, reviewData.id)}>삭제</button>
                  </div>
                ))
            )}
          </>
        ) : (
          <>
            {userPostViewData.map(
              (userData) =>
                userData.reviews &&
                userData.reviews.map((reviewData) => (
                  <div key={reviewData.id}>
                    <p>{reviewData.title}</p>
                    <p>{reviewData.text}</p>
                  </div>
                ))
            )}
          </>
        )
      )}

      {userPostViewData.map((data) =>
        data.isLoggedIn === false ? (
          <form onSubmit={addReview}>
            <input
              type="text"
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
              placeholder="제목"
            />
            <textarea
              type="text"
              value={postText}
              onChange={(event) => setPostText(event.target.value)}
              placeholder="내용"
            />
            <br />
            <button type="submit">추가하기</button>
          </form>
        ) : (
          <></>
        )
      )}
    </>
  );
}

export default DetailPages;
