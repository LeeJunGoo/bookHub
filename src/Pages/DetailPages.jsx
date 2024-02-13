import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, query, getDocs, collection, updateDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { bookData } from '../shared/mockData';

function DetailPages() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookHubData] = useState(bookData);
  const [userPostViewData, setUserPostViewData] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);
        const initialReviews = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUserPostViewData(initialReviews);

        // Check if user is logged in
        auth.onAuthStateChanged((user) => {
          if (user) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        });
      } catch (error) {
        console.error('리뷰를 불러오는 중 에러 발생:', error);
      }
    };

    fetchData();
  }, []);

  const addReview = async (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      window.alert('로그인이 필요합니다.');
      navigate(`/login`);
      return;
    }

    // Rest of your code for adding review
  };

  const deleteReview = async (collectionName, documentId, reviewIdToDelete) => {
    try {
      // Rest of your code for deleting review
    } catch (error) {
      console.error('리뷰를 삭제하는 중 에러 발생:', error);
    }
  };

  return (
    <>
      {/* Your book details display */}

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

      {userPostViewData
        .filter((userData) => userData.reviews && userData.reviews.some((review) => review.itemId === id))
        .map((userData) =>
          userData.reviews.map((reviewData) => (
            <div key={reviewData.id}>
              <p>{reviewData.title}</p>
              <p>{reviewData.text}</p>

              {/* Check isLoggedIn state */}
              {isLoggedIn ? (
                <button onClick={() => deleteReview('users', userData.id, reviewData.id)}>버튼</button>
              ) : (
                <button disabled>버튼</button>
              )}
            </div>
          ))
        )}

      {/* Check isLoggedIn state for rendering form */}
      {isLoggedIn ? (
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
      )}
    </>
  );
}

export default DetailPages;
