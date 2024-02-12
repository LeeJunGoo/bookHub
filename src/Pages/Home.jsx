import React, { useEffect } from 'react';
import { useState } from 'react';
import { bookData, userData, reviewData } from '../shared/mockData';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
//swiper 패키지 설치

//임시 로그인 정보
// const fakeId = 'XOianB6sCXZyfl7qF29Ck6PBRNx';
const fakeId = '';
// const fakeId = 'XOianB6sCXZyfl7qF29Ck6PBRNx2';

function Home() {
  const naviGate = useNavigate();

  const [review, setReview] = useState([]); // 베스트 셀러 리스트 및 작성한 리뷰 책에 대한 리스트
  const [title, setTitle] = useState(''); // "베스트 셀러" or "내가 작성한 책의 리뷰"
  const [TitleSearch, setTitleSearch] = useState(''); //검색 기능

  //로그인 정보
  const findUserData = userData.find((user) => (user.uid === fakeId ? true : false));

  //useEffect() 밖에 선언할 시 문장의 순서 및 무한 로딩 문제가 발생한다.
  useEffect(() => {
    //로그인 여부에 다른 실행 메소드
    findUserData ? loginData() : beLoginData();
  }, [findUserData]);

  //
  const loginData = () => {
    //1. 현재 로그인된 아이디의 리뷰 정보 찾기
    const ReviewData = reviewData.filter((review) => (findUserData.uid === review.reviewUser ? true : false));

    //작성한 리뷰가 있는지 여부 확인
    if (ReviewData.length !== 0) {
      //2. 정렬: 리뷰의 좋아요 개수 및 날짜순
      const orderData = ReviewData.sort((a, b) => {
        // 좋아요 개수가 같을 경우
        // if (a.like === b.like) {
        //   //날짜를 기준으로 정렬

        // } else {
        //   return b.like - a.like;
        // }

        return new Date(a.date) - new Date(b.date);
      });

      //3. 작성한 리뷰에 대한 책의 정보를 review 배열에 저장
      setReview(
        orderData.map((item) => {
          return bookData.find((bookItem) => (bookItem.itemId === item.bookId ? true : false));
        })
      );
      setTitle('내가 남긴 리뷰의 책');
      console.log('리뷰 데이터 존재 시 정상 작동');
    } else {
      //로그인은 하였지만 리뷰를 작성하지 않았을 경우
      setReview(bookData.filter((item) => item.rank <= 10));
      setTitle('베스트 셀러');
      console.log('리뷰 데이터 없을 경우 정상 작동');
    }
  };

  const beLoginData = () => {
    setReview(bookData.filter((item) => item.rank <= 10));
    setTitle('베스트 셀러');
    console.log('비로그인 시 정상 작동');
  };

  //로그인 및 로그아웃 버튼 핸들러
  const loginButtonEventHandler = () => {
    if (findUserData) {
      //로그아웃 이벤트 핸들러
    } else {
      //로그인 이벤트 핸들러
      naviGate(`/Login`);
    }
  };

  //마이페이지 버튼 핸들러
  const myPageButtonEventHandler = () => {
    if (findUserData) {
      //로그인 되었을 경우 마이페이지로 이동
      naviGate(`/Mypage/${findUserData.uid}`);
    } else {
      //비로그인일 경우 로그인 페이지로 이동
      if (window.confirm('흥흥!! 로그인이 안 됐어 바부야~ 로그인 할꺼지?')) {
        naviGate(`/Login`);
      }
    }
  };

  // 검색 기능 관련 메소드
  const TitleSearchEventHandler = (e) => {
    setTitleSearch(e.target.value);
  };

  const onSubmitEventHandler = () => {
    console.log(TitleSearch.trim());
  };

  return (
    <>
      <Header>
        <HeaderTitle>BookHub</HeaderTitle>

        <HeaderButtonDiv>
          <button onClick={loginButtonEventHandler}>{findUserData ? '로그아웃' : '로그인'}</button>
          <button onClick={myPageButtonEventHandler}>마이페이지</button>
        </HeaderButtonDiv>
        <form onSubmit={onSubmitEventHandler}>
          <input value={TitleSearch} onChange={TitleSearchEventHandler} maxLength={30}></input>
          <button type="submit">검색</button>
        </form>
      </Header>
      <main>
        <StSwiper
          slidesPerView={4} //각 슬라이드의 표시 수를 지정
          spaceBetween={10} //각 슬라이드 사이의 간격
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
        <StSection>
          <StP>{title}</StP>

          <StUl></StUl>
        </StSection>
        <List />
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
  gap: 40px;
  margin-bottom: 100px;
`;

const HeaderTitle = styled.h1`
  padding: 40px 0px 0px 40px;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
`;

const HeaderButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 20px;
  gap: 5px;
`;

const StSwiper = styled(Swiper)`
  width: 800px;
  height: 200px;
`;

const StSwiperSlide = styled(SwiperSlide)``;

const StSection = styled.section`
  width: 100%;
  padding: 50px;
`;

const StP = styled.p`
  font-size: 25px;
`;

const StUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-top: 60px;
`;

const StLi = styled.li`
  width: 150px;
  text-align: center;
  p {
    margin-top: 10px;
  }
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
