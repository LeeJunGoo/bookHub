import React from 'react';
import { bookData } from '../shared/mockData';
import { useNavigate } from 'react-router-dom';
import bookList from '../components/List';

function Home() {
  const naviGate = useNavigate();

  const goToButtonClick = (id) => {
    naviGate(`/detail/${id}`);
  };

  return (
    <>
      <h1>Home</h1>

      {/* <section>
        {bookData.map((bookList) => (
          <>
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
          </>
        ))}
      </section> */}
      <section>
        {bookData.map((book) => (
          <div>
            <bookList book = {book} />
                <button
                  onClick={() => {
                    goToButtonClick(book.itemId);
                  }}
                >
                  button
                </button>
              
           
          </div>
        ))}
      </section>

      {/* 사용자 리뷰창 */}
    </>
  );
}

export default Home;
