import React, { useState, useRef } from 'react'

import { useSelector } from 'react-redux';
import './app.css'

function App() {
  let personName = useSelector((state) => { return state})
  console.log(personName);

  return (
    <div>
      <h1>리덕스 연습중</h1>
      <h3>리덕스 store에서 뽑아온 것은 → 
        <span style={{color:'red'}}>{personName.person}</span> 
        입니다. 
      </h3>
    </div>
  )
}

export default App;