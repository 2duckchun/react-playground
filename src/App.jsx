import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './app.css'


function App() {
  const navigate = useNavigate()

  return (
    <div>
      <h1 onClick={() => navigate('/detail')}>디테일 페이지</h1>
      <h1 onClick={() => navigate('/about')}>어바웃 페이지</h1>
      <h1 onClick={() => navigate('/other')}>기타 페이지</h1>
      <h1 onClick={() => navigate(-1)}>뒤로</h1>
      <h1 onClick={() => navigate(1)}>앞으로</h1>
      <Routes>
        <Route path='/' element={<h1>킹스랜딩</h1>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/other' element={<div>기타 페이지 입니다.</div>}></Route>
        <Route path='*' element={<div>404 페이지입니다.</div>}></Route>
      </Routes>

    </div>
  )
}

function Detail() {
  return (
    <h1>디테일 페이지 입니다.</h1>
  )
}

function About() {
  return (
    <h1>어바웃 페이지 입니다.</h1>
  )
}

export default App;