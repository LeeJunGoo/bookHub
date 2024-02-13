import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { query, getDocs, collection, doc, arrayUnion, updateDoc, FieldValue, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../firebase';
import { bookData } from '../shared/mockData';

function DetailPages() {
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
        const q = query(collection(db, 'users'));
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

  // console.log(reviewData);

  // 리뷰를 추가하는 함수
  const 리뷰추가함수 = (event) => {
    event.preventDefault();

    // 리뷰 데이터 뭐시기는 로그인 경우에만 추가할수 있음
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const 리뷰데이터 = {
          createdAt: Date.now(),
          bookId: id,
          text: reviewText,
          title: reviewTitle,
          like: 0
        };

        console.log(user);

        // users 컬렉션 ->  users 컬렉션의 문서 -> users 컬렉션의 문서의 필드로 접근한다.
        // reviews라는 배열을 생성한다. ->  거기에는 리뷰데이터가 쌓인다.  (중첩 데이터를  집어넣는다.)
        // 현재 로그인된 사용자의 ID (예시로 고정된 값 사용)

        // 해당 사용자의 데이터 가져오기
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        // console.log(userDocSnapshot.data());
        // console.log(userDocSnapshot.exists());

        // user 정보가 존재할때
        if (userDocSnapshot.exists()) {
          // 기존 리뷰 데이터 가져오기
          const existingRiView = userDocSnapshot.data().reviews || [];

          const updateReviews = [...existingRiView, 리뷰데이터];

          await updateDoc(userDocRef, { reviews: updateReviews });
          console.log('리뷰가 저장되었습니다.');
        } else {
          // error를 뺃음시다.
          console.error('해당 사용자의 데이터를 찾을 수 없습니다.'); // 현재: 데이터 못받아와오고 있습니다. ㅠㅠㅠㅠ
        }
      } else {
        window.alert('로그인해주삼');
      }
    });
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          리뷰추가함수(event);
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
    </>
  );
}

export default DetailPages;
