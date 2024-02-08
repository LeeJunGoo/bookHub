import React, { useEffect } from 'react';
import { useState } from 'react';
import { bookData, userData } from '../shared/mockData';
import { useNavigate } from 'react-router-dom';

//임시 로그인 정보
const fakeId = userData[0].idx;

function Home() {
  const naviGate = useNavigate();
  const goToButtonClick = (id) => {
    naviGate(`/detail/${id}`);
  };

  // 로그인 여부 확인
  const [loginCheck, setLoginCheck] = useState(false);

  // 로그인 데이터 배열
  const { loginData, setLoginData } = useState(userData);

  //useState: 로그인 여부 확인
  useEffect(() => {
    setLoginCheck(userData.find((item) => (item.idx === fakeId ? true : false)));
  }, []);

  //로그인된 데이터

  return (
    <>
      <header>
        <div>HOME</div>
        <div>
          <button>마이페이지</button>
          <button>로그인</button>
        </div>
      </header>

      <section>
        {loginCheck
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
          : '로그인된 데이터 입니다.'}
      </section>

      <footer>
        <span>github</span>
        <p>주소 링크</p>
      </footer>
    </>
  );
}

export default Home;
