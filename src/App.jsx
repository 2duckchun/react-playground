import { Routes, Route, Link } from 'react-router-dom'
import './app.css'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>킹스랜딩</h1>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/other' element={<div>기타 페이지 입니다.</div>}></Route>
      </Routes>
      <h1><Link to="/detail">디테일 페이지</Link></h1>
      <h1><Link to="/about">어바웃 페이지</Link></h1>
      <h1><Link to="/other">기타 페이지</Link></h1>
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