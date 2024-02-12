import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Join() {
  const navigate = useNavigate();

  return (
    <>
      <StLink to="/">홈으로</StLink>
    </>
  );
}

export default Join;

const StLink = styled(Link)`
  padding: 15px;
  background-color: aqua;
  text-align: center;
`;
