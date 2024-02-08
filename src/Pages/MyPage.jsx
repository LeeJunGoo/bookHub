import React from 'react'
import { useNavigate } from 'react-router'

function MyPage() {

  const navigate = useNavigate();


  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div>MyPage

      <button onClick={goToLogin}> 로그아웃 </button>
    </div>
  )
}

export default MyPage