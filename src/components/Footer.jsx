import styled from 'styled-components';
import gitHubImage from '../styles/gitHub.png';
import { Link } from 'react-router-dom';



export const Footer = () => {
  return (<>
    <StFooter>
      <p>2024년 02월 07일~ 14일</p>
      <p>© bookHub</p>
      <address>
        <StFooterUl>
          <li>
            <StyledLink to={'https://github.com/psisdn08'}>
              <StFigure>
                <p>김형</p>
                <img src={gitHubImage} alt='null' />
              </StFigure>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={'https://github.com/yuriyun88'}>
              <StFigure>
                <p>정윤아</p>
                <img src={gitHubImage} alt='null' />
              </StFigure>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={'https://github.com/Andante23'}>
              <StFigure>
                <p>안단테</p>
                <img src={gitHubImage} alt='null' />
              </StFigure>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={`https://github.com/LeeJunGoo`}>
              <StFigure>
                <p>이준구</p>
                <img src={gitHubImage} alt='null' />
              </StFigure>
            </StyledLink>
          </li>
          <li>
            <StyledLink to={`https://github.com/gidalim`}>
              <StFigure>
                <p>박강토</p>
                <img src={gitHubImage} alt='null' />
              </StFigure>
            </StyledLink>
          </li>
        </StFooterUl>
      </address>
    </StFooter>
  </>)
}





const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  p {
    &:hover {
      text-decoration: underline; /* 선택된 상태에서는 밑줄을 나타낸다. */
    }
  }
`;



const StFooter = styled.footer`
  width: 100%;
  padding: 30px 0 30px;
  background-color: #888;
  text-align: center;
  color: white;
  font-size: 14px;
  margin-top: auto;
  
`;

const StFooterUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  margin: 10px 0;
  font-size: 18px;
`;


const StFigure = styled.figure`
  img {
    margin-top: 5px;
    width: 30px;
    height: 30px;
  }

  p {
    font-weight: 700;
    font-family: 'GowunBatang-Regular';
  }
`
