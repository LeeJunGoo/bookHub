import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query } from '@firebase/firestore';
import { getAuth, signOut, updateProfile } from '@firebase/auth';



function MyPage() {

  const { id } = useParams();
  const auth = getAuth();

  console.log(id)



  const navigate = useNavigate();

  const goToLogin = () => {
    signOut(auth).then(() => {
      navigate('/login')
      alert('로그아웃에 성공하였습니다.')

    }).catch((error) => {
      alert('로그아웃에 실패하였습니다.')
    })
  }

  return (
    <div>MyPage
      <section>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
      <button onClick={goToLogin}> 로그아웃 </button>
    </div>
  )
}

export default MyPage