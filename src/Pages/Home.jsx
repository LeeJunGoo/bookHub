import React, { useEffect } from 'react';
import { useState } from 'react';
import { bookData } from '../shared/mockData';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import '../styles/Carousel.css';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
//swiper 패키지 설치

function Home() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [review, setReview] = useState([]); // 베스트 셀러 리스트 및 작성한 리뷰 책에 대한 리스트
  const [title, setTitle] = useState(''); // "베스트 셀러" or "내가 작성한 책의 리뷰"

  const [titleSearch, setTitleSearch] = useState(''); //검색창에 입력한 책의 제목
  const [filteredResults, setFilteredResults] = useState([]); //검색 결과에 대한 리스트

  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(currentUser);
    const fetchReviewData = async () => {
      if (currentUser) {
        const userDocRef = doc(collection(db, 'users'), currentUser.uid);

        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const reviews = userData.reviews || [];
            if (reviews.length > 0) {
              const orderData = reviews.sort((a, b) => new Date(a.date) - new Date(b.date));
              setReview(orderData);
              setTitle('내가 남긴 리뷰의 책');
            } else {
              setReview(bookData.filter((item) => item.rank <= 10));
              setTitle('리뷰가 없는 경우');
              console.log('데이터가 없어요.');
            }
          }
        } catch (error) {
          console.error('데이터를 불러오는 데 실패했습니다.', error);
        }
      } else {
        setReview(bookData.filter((item) => item.rank <= 10));
        setTitle('비로그인상태 베스트셀러');
      }
    };

    fetchReviewData();
  }, [currentUser]);

  //로그인 및 로그아웃 버튼 핸들러
  const logoutButtonEventHandler = () => {
    signOut(auth)
      .then(() => {
        console.log('로그아웃 성공');
        navigate('/login');
      })
      .catch((error) => {
        console.error('로그아웃 에러', error);
      });
  };

  const myPageButtonEventHandler = () => {
    if (currentUser) {
      navigate(`/Mypage/`);
    } else {
      if (window.confirm('흥흥!! 로그인이 안 됐어 바부야~ 로그인 할꺼지?')) {
        navigate(`/Login`);
      }
    }
  };

  //검색 창의 onChange 메소드
  const searchOnChangeEventHandler = (e) => {
    setTitleSearch(e.target.value);
  };

  //검색 버튼
  const onSubmitEventHandler = (e) => {
    e.preventDefault();

    if (titleSearch !== '') {
      //검색 창에 입력한 문자열이 mock데이터의 책의 제목에 포함되어있는 리스트
      const searchData = bookData.filter((item) => {
        return item.title.trim().includes(titleSearch.trim());
      });

      if (searchData.length === 0) {
        alert('검색한 결과가 없습니다.');
      }

      setFilteredResults(searchData);
    } else {
      alert('검색을 해주세요');
    }
  };

  return (
    <>
      <Header>
        <HeaderTitle onClick={() => window.location.reload()}>BookHub</HeaderTitle>

        <HeaderButtonDiv>
          {currentUser ? (
            <div>
              <button onClick={logoutButtonEventHandler}>로그아웃</button>
              <button onClick={myPageButtonEventHandler}>마이페이지</button>
            </div>
          ) : (
            <button onClick={() => navigate('/login')}>로그인</button>
          )}
        </HeaderButtonDiv>

        <HeaderForm onSubmit={onSubmitEventHandler}>
          <input value={titleSearch} onChange={searchOnChangeEventHandler} maxLength={30}></input>
          <button type="onSubmit">검색</button>
        </HeaderForm>
      </Header>

      <main>
        <StSection>
          <StP>{title}</StP>
          <StSwiper
            slidesPerView={3} //각 슬라이드의 표시 수를 지정
            spaceBetween={5} //각 슬라이드 사이의 간격
            loop={true} //슬라이드를 루프하여 계속 반복되도록 설정
            pagination={{
              clickable: true //사용자가 페이지를 클릭하여 슬라이드를 이동
            }}
            navigation={true} // 슬라이드 이전 및 다음 버튼을 활성화
            modules={[Pagination, Navigation]}
          >
            {review.map((book) => (
              <StSwiperSlide key={book.itemId}>
                <StyledLink to={`/detail/${book.itemId}`}>
                  <img src={book.coverSmallUrl} alt="대체이미지" />
                  <p>{book.title}</p>
                </StyledLink>

                <p>
                  {book.publisher}/{book.author}
                </p>
              </StSwiperSlide>
            ))}
          </StSwiper>
        </StSection>
        <section>
          {filteredResults.length !== 0 ? <List bookData={filteredResults} /> : <List bookData={bookData} />}
        </section>
      </main>

      <StFooter>
        <p>2024년 02월 07일~ 14일</p>
        <p>© bookHub</p>
        <address>
          <StFooterUl>
            <li>
              <StyledLink to={'https://github.com/psisdn08'}>
                <p>김형</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'https://github.com/yuriyun88'}>
                <p>정윤아</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to={'https://github.com/Andante23'}>
                <p>안단테</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`https://github.com/LeeJunGoo`}>
                <p>이준구</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to={`https://github.com/gidalim`}>
                <p>박강토</p>
              </StyledLink>
            </li>
          </StFooterUl>
        </address>
      </StFooter>
    </>
  );
}

export default Home;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  gap: 60px;
`;

const HeaderTitle = styled.h1`
  padding-top: 50px;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
  }
`;

const HeaderButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 30px;
  gap: 5px;
`;

const HeaderForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;

  input {
    width: 35%;
    height: 30px;
  }

  button {
    width: 50px;
  }
`;

const StSwiper = styled(Swiper)`
  width: 100%;
  margin-top: 60px;
`;

const StSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  p {
    margin-top: 10px;
  }
`;

const StSection = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  padding: 50px;

  p {
  }
`;

const StP = styled.p`
  font-size: 25px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  p {
    &:hover {
      text-decoration: underline; /* 선택된 상태에서는 밑줄을 나타낸다. */
    }
  }
`;

const StFooter = styled.footer`
  width: 100%;
  padding: 30px 0 30px;
  background-color: #888;
  text-align: center;
  color: white;
  font-size: 14px;
`;

const StFooterUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin: 10px 0;
  font-size: 18px;
`;
