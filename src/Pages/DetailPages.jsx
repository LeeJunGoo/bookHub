import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { bookData } from '../shared/mockData';

function DetailPages() {
  const [bookHubData, setBookHubData] = useState(bookData);

  const { id } = useParams();
  // console.log(typeof id);
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
    </>
  );
}

export default DetailPages;
