import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookData, userData } from '../shared/mockData';

function DetailPages() {
  // 사용자 게시글 입력 데이터
  const [userPostViewData, setUserPostViewData] = useState(userData);

  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const { id } = useParams();
  //console.log(typeof id);

  const reviewIsNowData = userData.filter((user) => user.islogin === false && user.review);
  console.log(reviewIsNowData);
  // console.log(reviewIsNowdata);
  return (
    <>
      {/* 
         id값을 typeof 통해서 데이터타입 찍어보니 String 이더라
         data.itemId값은 mockData에서 받아온값인데 숫자였음
         그래서 형변환 메서드 Number() 로 숫자 형변환 해줌
    */}
      {bookData
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
      <form>
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
        />
        <button type="submit"></button>
      </form>

      {reviewIsNowData.map((data) => (
        <>
          <div key={data.idx}>
            <b>{data.userNickName}</b>

            <p>{data.content}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default DetailPages;
