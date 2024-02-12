import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { }



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
              <li>프로필</li>
              <li>닉네임</li>
              <li>이메일</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <label>
              내가 작성한 리뷰
            </label>
            <ul>
              <li>영화1</li>
              <li>영화2</li>
              <li>영화3</li>
              <li>영화4</li>
              <li>영화5</li>
            </ul>
          </div>
        </section>
        <button onClick={goToLogin}> 로그아웃 </button>
      </div>
    )
  }

export default MyPage




const Stul.styled