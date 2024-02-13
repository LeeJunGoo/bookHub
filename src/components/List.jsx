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
          {/* <Rate>
            <p>{book.customerReviewRank}</p>
          </Rate> */}
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
  font-family: 'RIDIBatang';
  margin: auto;
  
  padding: 10%;
  

`


const ListWrapper = styled.li `
  width: 18%;
  min-width: 220px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  font-family: 'SOGANGUNIVERSITYTTF';
  margin: auto;

  color : #222f3e

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
  justify-content: center;
  margin: auto;





`;


const BookCoverAndRanking = styled.div`

justify-content: center;
margin: auto;

`;

const BookCover = styled.div`   
  padding: 12px;
  background-color: #f6e58d;
  `;

const Genre = styled.div`
  font-size: small;
  margin: auto;


`;

const BookNameAndAuthur = styled.div`

  margin: auto;


`;

const BookName = styled.div`
  font-weight: bold;
  color: black;
  font-size: medium;
  line-height: 1.2;
  text-align: center;
  margin: 6px;

`;

const Author = styled.div`
  font-weight: lighter;
  font-size: small;
  text-align: center;

`;

const Rate = styled.div`
  margin: auto;
`;

const Outline = styled.div`

  font-family: 'GowunBatang-Regular';
  text-align: center;
  margin: auto;
  margin-bottom: 30px;


  width: 200px;
  height: 60px;
`;
