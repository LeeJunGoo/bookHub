import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookData, userData } from '../shared/mockData';

function DetailPages() {
  const [bookHubData, setBookHubData] = useState(bookData);

  // 사용자 게시글 입력 데이터
  const [userPostViewData, setUserPostViewData] = useState([]);

  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');

  const { id } = useParams();
  //console.log(typeof id);

  // const onSubmitButtonClick = (event) =>{
  //    event.preventDefault();

  //    {userData.map((data)=>{

  //    // set함수에 저장합시다.
  //     setUserPostViewData((prev) => [...prev ,obj ])

  //    // 인풋 리셋
  //     setPostTitle("")
  //     setPostText("")
  // }

  return (
    <>
      {/* 
        id값을 typeof 통해서 데이터타입 찍어보니 String 이더라
        data.itemId값은 mockData에서 받아온값인데 숫자였음
        그래서 형변환 메서드 Number() 로 숫자 형변환 해줌
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

      <></>
    </>
  );
}

export default DetailPages;
