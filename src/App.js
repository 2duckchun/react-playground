import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profile from './Profile';

function App() {

  


  return (
      <div>
        <BrowserRouter>
        <ul>
          <li><Link to='/'>홈그라운드</Link></li>
          <li><Link to='/about'>소개그라운드</Link></li>
          <li><Link to='/profiles/taesoo'>태수</Link></li>
          <li><Link to='/profiles/minseung'>민승</Link></li>
          <li><Link to='/profiles/jaeho'>재호</Link></li>
          <li><Link to='/profiles/jihyeon'>지현</Link></li>
        </ul>
        <hr></hr>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/profiles/:id' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
