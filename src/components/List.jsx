import React from 'react';
import { bookData } from '../shared/mockData.js';
import { bookData2 } from '../shared/bookData2.json';
import styled from 'styled-components';



function bookList({ bookData2 }) {
  return (
    <section>
      {bookData2.map((book) => (
        <>
          <div key={book.itemId}>
            <ListWrapper>
              <BookCoverAndRanking>
                <BookCover>
                  <img src={book.coverLargeUrl} alt="커버이미지"></img>
                </BookCover>
                <Ranking>{book.rank}</Ranking>
              </BookCoverAndRanking>
              <Genre>
                <p>{book.categoryName}</p>
              </Genre>
              <BookNameAndAuthur>
                <BookName>
                  <p>{book.title}</p>
                </BookName>
                <Author>
                  <p>{book.author}</p>
                </Author>
              </BookNameAndAuthur>
              <Rate>
                <p>{book.customerReviewRank}</p>
              </Rate>
              <Outline>
                <span>{book.description}</span>
              </Outline>
            </ListWrapper>
          </div>
        </>
      ))}
    </section>
  );
}
export default bookList;

const ListWrapper = styled.li`
  background-color: red;
  display: flex;
`;

const BookCoverAndRanking = styled.div``;

const BookCover = styled.div``;


const Ranking = styled.div``;

const Genre = styled.div``;

const BookNameAndAuthur = styled.div``;
const BookName = styled.div``;

const Author = styled.div``;

const Rate = styled.div``;

const Outline = styled.div``;
