import React from 'react';
import { bookData } from '../shared/mockData.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function List() {
  const navi = useNavigate();

  return (
    <section>
<<<<<<< HEAD
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
=======
      {bookData.map((book) => (
        <div
          key={book.itemId}
          onClick={() => {
            navi(`detail/${book.itemId}`);
          }}
        >
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
              <p>{book.description}</p>
            </Outline>
          </ListWrapper>
        </div>
>>>>>>> 9f0726e919386419dbc5dc1c690138bca4295eca
      ))}
    </section>
  );
}
export default List;

const ListWrapper = styled.li`
  background-color: #eecbcb;
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
