import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function List({ bookData }) {
  return (
    <StUl>
      {bookData.map((book) => (
        <ListWrapper key={book.itemId}>
          <BookCoverAndRanking>
            <BookCover>
              <Link to={`/detail/${book.itemId}`}>
                <img src={book.coverLargeUrl} alt="커버이미지"></img>
              </Link>
            </BookCover>
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
            <Stp>{book.description}</Stp>
          </Outline>
        </ListWrapper>
      ))}
    </StUl>
  );
}

export default List;



const StUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  gap: 20px;
`


const ListWrapper = styled.li`
  width: 18%;
  min-width: 355px;
  gap: 20px;
  background-color: #e3caca;
  display: flex;
  flex-direction: column;
  font-family: 'RIDIBatang';
`;


const Stp = styled.p`
  width: 200px;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`


const BookCoverAndRanking = styled.div``;

const BookCover = styled.div``;

const Genre = styled.div``;

const BookNameAndAuthur = styled.div``;

const BookName = styled.div``;

const Author = styled.div``;

const Rate = styled.div``;

const Outline = styled.div`
  width: 200px;
  height: 60px;
`;
