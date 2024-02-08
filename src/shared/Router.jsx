import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import DetailPages from '../Pages/DetailPages'


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<DetailPages />} />
      </Routes>
    </BrowserRouter>
  )
}