import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../components/List';

function Home() {
  const naviGate = useNavigate();

  const goToButtonClick = (id) => {
    naviGate(`/detail/${id}`);
  };

  return (
    <>
      <h1>Home</h1>
      <header></header>
      <List />
      <footer></footer>
      {/* 사용자 리뷰창 */}
    </>
  );
}

export default Home;



{/* <section>
        {bookData.map((book) => (
          <div>
            <bookList book={book} />
            <button
              onClick={() => {
                goToButtonClick(book.itemId);
              }}
            >
              button
            </button>


          </div>
        ))}
      </section> */}