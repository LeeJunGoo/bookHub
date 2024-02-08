import React from 'react';
import { bookData } from '../shared/mockData';
import { useNavigate } from 'react-router-dom';
function Home() {
  const naviGate = useNavigate();

  const goToButtonClick = (id) => {
    naviGate(`/detail/${id}`);
  };

  return (
    <>
      <div>Home</div>

      <section>
        {bookData.map((book) => (
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
      </section>
    </>
  );
}

export default Home;
