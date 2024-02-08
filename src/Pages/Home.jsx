import React, { useEffect } from 'react';
import { useState } from 'react';
import { bookData, userData } from '../shared/mockData';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//임시 로그인 정보
const fakeId = userData[0].idx;

function Home() {
  const naviGate = useNavigate();
  const goToButtonClick = (id) => {
    naviGate(`/detail/${id}`);
  };

  //리 랜더링될 때마다 false값이 부여되어 책의 전체가 계속 보인다. 해결방법) 못찾음 ㅠㅠ
  const [loginCheck, setLoginCheck] = useState(false);

  //로그인 여부 확인
  const loginData = userData.find((user) => (user.idx === fakeId ? true : false));

  //좋아요 및 날짜 기준으로 정렬
  // 좋아요 내림차순, 날짜는 오름차순
  const orderData = loginData.review.sort((a, b) => {
    //좋아요가 같을 경우
    if (a.like === b.like) {
      //날짜를 기준으로 정렬
      return new Date(a.date) - new Date(b.date);
    }
    return b.like - a.like;
  });

  console.log(orderData);

  // 사용자가 작성한 리뷰의 책에 대한 정보
  const reviewBook = bookData.filter((bookItem) => {
    return orderData.find((reviewItem) => reviewItem.itemId === bookItem.itemId);
  });

  useEffect(() => {
    setLoginCheck(loginData);
  }, []);

  return (
    <>
      <header>
        <div>HOME</div>
        <div>
          <button>마이페이지</button>
          <button>로그인</button>
        </div>
      </header>

      <Test>
        {!loginCheck
          ? bookData.map((book) => (
              <div key={book.itemId}>
                <img src={book.coverSmallUrl} alt="대체이미지" />
                <p>{book.title}</p>
                <div>
                  <span>{book.publisher}</span>
                  <button
                    onClick={() => {
                      goToButtonClick(book.itemId);
                    }}
                  >
                    button
                  </button>
                </div>
              </div>
            ))
          : reviewBook.map((book) => (
              <div key={book.itemId}>
                <img src={book.coverSmallUrl} alt="대체이미지" />
                <p>{book.title}</p>
                <div>
                  <span>{book.publisher}</span>
                  <button
                    onClick={() => {
                      goToButtonClick(book.itemId);
                    }}
                  >
                    button
                  </button>
                </div>
              </div>
            ))}
      </Test>

      <footer>
        <span>github</span>
        <p>주소 링크</p>
      </footer>
    </>
  );
}

export default Home;

const Test = styled.div`
  display: flex;
  flex-direction: row;
`;
