import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookData, userData } from '../shared/mockData';
import styled from 'styled-components';
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
      {bookData
        .filter((data) => data.itemId === Number(id))
        .map((book) => (
          <DetailCard key={book.itemId}>
            <DetailCardBody>
              <DetailImg src={book.coverLargeUrl} alt="" />
              <DetailImgInfo>
                <DetailImgInfoHero>
                  <DetailCardImgInfoPtag>{book.author}</DetailCardImgInfoPtag>
                  <DetailCardImgInfoPtag>{book.title}</DetailCardImgInfoPtag>
                  <br />
                  <DetailCardImgInfoPtag>{book.publisher}</DetailCardImgInfoPtag>
                  <DetailCardImgInfoPtag>{book.description}</DetailCardImgInfoPtag>
                  <br />
                </DetailImgInfoHero>
              </DetailImgInfo>
            </DetailCardBody>
          </DetailCard>
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

const DetailCard = styled.div`
  width: 1158px;
  height: 400px;
`;

const DetailImg = styled.img`
  width: 220px;
  height: 334px;
`;

const DetailCardBody = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const DetailImgInfo = styled.div``;

const DetailImgInfoHero = styled.div``;

const DetailCardImgInfoPtag = styled.p`
  font-weight: bolder;
  margin: 10px;
`;

const DetailPostInputForm = styled.form`
  margin-left: 10rem;
`;

const DetailPosInputFormInput = styled.input`
  width: 500px;
  height: 20px;
`;

const DetailPosInputFormText = styled.textarea`
  margin-top: 10px;
  width: 500px;
  height: 80px;
`;

const DetailPostSubmitButton = styled.button`
  margin-left: 440px;
  margin-top: 10px;
`;

// 댓글 스타일 해야됨
