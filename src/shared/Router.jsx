import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import DetailPages from '../Pages/DetailPages'
import Login from '../Pages/Login'
import Join from '../Pages/Join'
import MyPage from '../Pages/MyPage'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailPages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/myPage/:id' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}