import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { bookData } from '../shared/mockData';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import List from '../components/List';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import '../styles/Carousel.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  const navigate = useNavigate();
  const auth = getAuth();

  const [review, setReview] = useState([]);
  const [title, setTitle] = useState('');

  const [titleSearch, setTitleSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const searchRef = useRef('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        fetchReviewData(user.uid);
      } else {
        setCurrentUser(null);
        setReview(bookData.filter((item) => item.rank <= 10));
        setTitle('베스트셀러');
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchReviewData = async (userId) => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', userId));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const reviewIds = userData.reviews || [];

        const reviewsPromises = reviewIds.map((reviewId) => getDoc(doc(db, 'reviews', reviewId)));
        const reviewsSnapshots = await Promise.all(reviewsPromises);
        const reviewsData = reviewsSnapshots.map((snap) => snap.data());

        const booksFromReviews = reviewsData
          .map((review) => {
            const book = bookData.find((book) => book.itemId === Number(review.itemId));
            return book ? { ...book, reviewDate: review.date } : undefined;
          })
          .filter((book) => book !== undefined);

        if (booksFromReviews.length > 0) {
          const orderData = booksFromReviews.sort((a, b) => new Date(a.reviewDate) - new Date(b.reviewDate));
          setReview(orderData);
          setTitle('내가 남긴 리뷰의 책');
        } else {
          setReview(bookData.filter((item) => item.rank <= 10));
          setTitle('베스트셀러');
        }
      }
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다.', error);
    } finally {
      setLoading(false);
    }
  };

  const logoutButtonEventHandler = () => {
    signOut(auth)
      .then(() => {
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

  const titleSearchEventHandler = (e) => {
    setTitleSearch(e.target.value);
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();

    if (titleSearch !== '') {
      const searchData = bookData.filter((item) => {
        return item.title.trim().includes(titleSearch.trim());
      });

      if (searchData.length === 0) {
        alert('검색한 결과가 없습니다.');
      } else {
        setFilteredResults(searchData);
        searchRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      alert('검색을 해주세요');
    }
  };

  if (loading) {
    return (
      <div>
        현재 상태는 로딩중일지도
        {console.log('로딩중입니다')}
      </div>
    );
  }

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
          <input
            value={titleSearch}
            onChange={titleSearchEventHandler}
            maxLength={30}
            placeholder=" 당신이 원하는 책을 찾아 드리겠습니다. 책의 제목을..."
          ></input>
          <button type="onSubmit">검색</button>
        </HeaderForm>
      </Header>

      <main>
        <StSection>
          <StDiv2>
            <StP>{title}</StP>
          </StDiv2>

          <StDiv1>
            <StSwiper
              loop={true} //슬라이드를 루프하여 계속 반복되도록 설정
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{
                clickable: true //사용자가 페이지를 클릭하여 슬라이드를 이동
              }}
              navigation={true} // 슬라이드 이전 및 다음 버튼을 활성화
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                260: {
                  slidesPerView: 1, //각 슬라이드의 표시 수를 지정
                  spaceBetween: 29 //각 슬라이드 사이의 간격
                },
                360: {
                  slidesPerView: 2,
                  spaceBetween: 90
                },
                660: {
                  slidesPerView: 3,
                  spaceBetween: 36
                },
                760: {
                  slidesPerView: 4,
                  spaceBetween: 57
                }
              }}
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
          </StDiv1>
        </StSection>
        <section ref={searchRef}>
          {filteredResults.length !== 0 ? <List bookData={filteredResults} /> : <List bookData={bookData} />}
        </section>
      </main>
    </>
  );
}

export default Home;
const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;
  gap: 20px;
`;

const HeaderTitle = styled.button`
  font-family: 'TTHakgyoansimSamulhamR';
  margin: 40px;
  padding: 20px;
  border-radius: 15px;
  background-color: transparent;
  border: transparent;
  font-size: 50px;

  &:hover {
    background-color: #6ea477;
    transition: 0.5s;
  }
`;

const HeaderButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 70px;
  button {
    font-size: 15px;
    font-family: 'TTHakgyoansimSamulhamR';
    background-color: transparent;
    border: transparent;
    margin-right: 10px;
    padding: 20px;
    &:hover {
      border-radius: 15px;
      background-color: #6ea477;
    }
  }
`;

const HeaderForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;

  input {
    width: 35%;
    height: 30px;
    border: 2px solid black;
    border-radius: 6px;
  }

  button {
    width: 50px;
    border: 2px solid black;
    border-radius: 6px;

    &:hover {
      background-color: #6ea477;
    }
  }
`;

const StSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 0 1px #333;
`;
const StP = styled.p`
  font-family: 'SOGANGUNIVERSITYTTF';
  font-size: 30px;
  margin-top: 30px;
`;

const StSwiper = styled(Swiper)`
  width: 100%;
  height: 280px;
  padding: 50px 30px;
`;

const StSwiperSlide = styled(SwiperSlide)`
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

// const StFooter = styled.footer`
//   width: 100%;
//   padding: 30px 0 30px;
//   background-color: #888;
//   text-align: center;
//   color: white;
//   font-size: 14px;
// `;

// const StFooterUl = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   gap: 50px;
//   margin: 10px 0;
//   font-size: 18px;
// `;

const StDiv1 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StDiv2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: start;
`;

// const StFigure = styled.figure`
//   img {
//     margin-top: 5px;
//     width: 30px;
//     height: 30px;
//   }

//   p {
//     font-weight: 700;
//     font-family: 'GowunBatang-Regular';
//   }
// `
