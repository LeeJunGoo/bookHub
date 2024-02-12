import React, { useState, useEffect } from 'react';

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

    let isLoggedIn = false; // 로그인 여부를 나타내는 변수 추가

    for (const user of userData) {
      if (user.isLoggedIn === true && user.userNickName === userNickName) {
        isLoggedIn = true; // 로그인된 상태임을 표시
        break; // 로그인된 사용자를 찾았으므로 반복문 종료
      }
    }

    if (isLoggedIn) {
      // 입력폼에서 title , text 저장
      const 객체 = {
        createdAt: Date.now(),
        title: postTitle,
        text: postText,
        id: crypto.randomUUID()
      };

      // console.log(객체);

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
      // 로그인해야 한다는 경고 메시지와 함께 로그인 페이지로 이동
      window.alert('로그인해주세요');
      navigate(`/login`);
    }
  };

  // firebase안의 미리 작성되어 있는 review 데이터를 가져오는 로직
  useEffect(() => {
    const fetchData = async () => {
      // collection 이름이 todos인 collection의 모든 document를 가져옵니다.
      const q = query(collection(db, 'review'));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      // document의 id와 데이터를 initialTodos에 저장합니다.
      // doc.id의 경우 따로 지정하지 않는 한 자동으로 생성되는 id입니다.
      // doc.data()를 실행하면 해당 document의 데이터를 가져올 수 있습니다.
      querySnapshot.forEach((doc) => {
        initialTodos.push({ id: doc.id, ...doc.data() });
      });

      setUserPostViewData(initialTodos);
      console.log(userPostViewData);

      console.log();
    };

    fetchData();
  }, []);

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

      {/* 비로그인 상태에서도 이데이터는 보임!!! */}
      <section>
        <b>남이 작성한 리뷰임</b>
        {/* bookId와 일치한것만 보이게  */}
        {userPostViewData
          .filter((post) => post.bookId === Number(id))
          .map((data) => (
            <div key={data.idx}>
              <p>{data.content}</p>
            </div>
          ))}
      </section>

      {/* 사용자 게시글 부분 : 로그인  */}

      {userData.map((data) => {
        data.isLoggedIn === false ? (
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
        ) : (
          <div></div>
        );
      })}
    </>
  );
}

export default DetailPages;
