import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDoc, doc, query, getDocs, collection, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
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
        id: crypto.randomUUID()
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
        const q = query(collection(db, 'review'));
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
              <p></p>
            </div>
          </div>
        ))}

      <section>
        <b>남이 작성한 리뷰임</b>
        {userPostViewData.length === 0 ? (
          <h1>데이터가 없네요</h1>
        ) : (
          <>
            {userPostViewData
              .filter((post) => post.bookId === Number(id))
              .map((data) => (
                <div key={data.id}>
                  <p>{data.content}</p>
                </div>
              ))}
          </>
        )}
      </section>

      {/* 사용자 리뷰 작성 폼 */}
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
    </>
  );
}

export default DetailPages;
