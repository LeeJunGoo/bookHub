import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import DetailPages from '../Pages/DetailPages'
import Login from '../Pages/Login'
import Join from '../Pages/Join'
import MyPage from '../Pages/MyPage'
import { Footer } from '../components/Footer'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailPages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/myPage/' element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}