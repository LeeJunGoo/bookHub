import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';

function MyPage() {


  const { id } = useParams();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(id)

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div>MyPage
      <section>

      </section>
      <button onClick={goToLogin}> 로그아웃 </button>
    </div>
  )
}

export default MyPage