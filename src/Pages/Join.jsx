import React from 'react'
import { useNavigate } from 'react-router'
// import styled from 'styled-components';



function Join() {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToLogin = () => {
    navigate('/login')
  }




  return (
    <>
      <button onClick={goToHome}>홈으로</button>

      <h2>회원가입</h2>
      <section>

        <ul>
          <li>
            <label>이메일</label>
            <input
              type='text'
              placeholder='이메일'
            ></input>
          </li>
          <li>
            <label>패스워드</label>
            <input
              type='password'
              placeholder='비밀번호'
            ></input>
          </li>
          <li>
            <label>닉네임</label>
            <input
              type='text'
              placeholder='닉네임'
            ></input>
          </li>
          <div>
            <button onClick={goToLogin}>회원가입하기</button>
          </div>
        </ul>
        <ol></ol>
      </section>
    </>
  )
}

export default Join



// const StLink = styled(Link)`
//   padding: 15px;
//   background-color: aqua;
//   text-align: center;
// `