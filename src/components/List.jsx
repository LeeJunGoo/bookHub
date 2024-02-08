import { bookData } from '../shared/mockData.js';
import { bookData } from '../shared/bookData.json';
import styled from 'styled-components';


export default function bookList({book}) {
  return (
    <ListWrapper>
      <BookCoverAndRanking>
        <BookCover>
          <img src={book.coverLargeUrl} alt="커버이미지"></img>
        </BookCover>
        <Ranking></Ranking>
      </BookCoverAndRanking>
      <Genre></Genre>
      <BookNameAndAuthur>
        <BookName>
          <p>{book.title}</p>
        </BookName>
        <Author>
            <p>{book.author}</p>
        </Author>
      </BookNameAndAuthur>
      <Rate></Rate>
      <Outline></Outline>
    </ListWrapper>
  )
};


const ListWrapper = styled.li `

    display: flex

`;

const BookCoverAndRanking = styled.div `



`;

const Ranking = styled.div `



`;

const Genre = styled.div `



`;

const BookNameAndAuthur = styled.div `



`;
const BookName = styled.div `



`;

const Author = styled.div `



`;

const Rate = styled.div `



`;

const Outline = styled.div `



`;

