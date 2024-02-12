import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { bookData, userData } from '../shared/mockData';
import styled from 'styled-components';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';

function DetailPages() {
  const navigate = useNavigate();

  const [bookHubData, setBookHubData] = useState(bookData);
  const [userPostViewData, setUserPostViewData] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const { id } = useParams();

  // 파이어베이스 addDoc 이용
  const addReview = async (event, userNickName) => {
    event.preventDefault();

    userData.map(async (user) => {
      if (user.isLoggedIn === true && user.userNickName === userNickName) {
        // 입력폼에서 title , text 저장
        const 객체 = {
          createdAt: Date.now(),
          title: postTitle,
          text: postText,
          id: crypto.randomUUID()
        };

        console.log(객체);

        setUserPostViewData((prev) => {
          return [...userPostViewData, 객체];
        });

        console.log(userPostViewData);
        setPostText('');
        setPostTitle('');

        // firestore에  컬렉션 참조
        const collectionRef = collection(db, 'review');

        await addDoc(collectionRef, 객체);
      } else {
        window.alert('로그인해주세요');

        // 로그인으로 이동하기
        navigate(`login`);
      }
    });
  };

  return (
    <>
      {/* 
        id값을 typeof 통해서 데이터타입 찍어보니 String 이더라
        그래서 형변환 메서드 Number() 사용        
    */}
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

      {/* 사용자 게시글 부분  */}
      <form onSubmit={addReview}>
        <input
          type="text"
          value={postTitle}
          onChange={(event) => {
            setPostTitle(event.target.value);
          }}
          placeholder="제목"
        />
        <textarea
          type="text"
          value={postText}
          onChange={(event) => {
            setPostText(event.target.value);
          }}
          placeholder="내용"
        />{' '}
        <br />
        <button type="submit">추가하기</button>
      </form>

      {/* 댓글 다는 창 */}
    </>
  );
}

export default DetailPages;
