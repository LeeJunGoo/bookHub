import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

function List({ bookData }) {
  return (
    <ul>
      {bookData.map((book) => (
        <ListWrapper key={book.itemId}>
          <BookCoverAndRanking>
            <BookCover>
              <Link to={`/detail/${book.itemId}`}>
                <img src={book.coverLargeUrl} alt="커버이미지"></img>
              </Link>
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
      ))}
    </ul>
  );
}

export default List;

const ListWrapper = styled.li`
  font-family: 'RIDIBatang';


  display: flex;
`;

const BookCoverAndRanking = styled.div``;

const BookCover = styled.div``;

const Ranking = styled.div``;

const Genre = styled.div``;

const BookNameAndAuthur = styled.div`



`;
const BookName = styled.div``;

const Author = styled.div``;

const Rate = styled.div``;

const Outline = styled.div``;
