import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bookData, userData } from '../shared/mockData';
import styled from 'styled-components';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase';

function DetailPages() {
  const navigate = useNavigate();

  const [bookHubData, setBookHubData] = useState(bookData);

  // 사용자 게시글 입력 데이터
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
         data.itemId값은 mockData에서 받아온값인데 숫자였음
         그래서 형변환 메서드 Number() 로 숫자 형변환 해줌
    */}
      {bookData
        .filter((data) => data.itemId === Number(id))
        .map((book) => (
          <DetailCard key={book.itemId}>
            <DetailCardBody>
              <DetailImg src={book.coverLargeUrl} alt="" />
              <div>
                <div>
                  <DetailCardImgInfoPtag>{book.author}</DetailCardImgInfoPtag>
                  <DetailCardImgInfoPtag>{book.title}</DetailCardImgInfoPtag>
                  <br />
                  <DetailCardImgInfoPtag>{book.publisher}</DetailCardImgInfoPtag>
                  <DetailCardImgInfoPtag>{book.description}</DetailCardImgInfoPtag>
                  <br />
                </div>
              </div>
            </DetailCardBody>
          </DetailCard>
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
        <DetailPostSubmitButton type="submit">추가하기</DetailPostSubmitButton>
      </form>

      {/* 댓글 다는 창 */}
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
const DetailPostRiView = styled.div`
  padding: 5px;
  box-shadow: 1px 1px 1px 1px gray;
  width: 400px;
  height: 50px;
  margin: 4px;
`;

const DetailPostRiViewBorder = styled.div`
  margin: 50px;
  display: flex;
`;
