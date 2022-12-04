import React, { useState, useRef } from 'react'
import './app.css'

function App() {
  const [emailValue, setEmailValue] = useState('')
  const [pwValue, setPwValue] = useState('')
  const emailInput = useRef(null)
  const pwInput = useRef(null)

  const inputCheck = e => {
    e.preventDefault()
    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요.")
      emailInput.current.focus()
      return
    }
    if (pwInput.current.value === "") {
      alert("비번을 입력해주세요.")
      pwInput.current.focus()
      return
    }

    setEmailValue(emailInput.current.value)
    setPwValue(pwInput.current.value)
  }

  return (
      <form>
        <label>
          이메일 : <input type="email" ref={emailInput} />
        </label>
        <label>
          비밀번호 : <input type="password"  ref={pwInput}/>
        </label>

        <button type='submit' style={{width: "100px"}} onClick={inputCheck}>
          로그인
        </button>
        <div>입력한 이메일 : {emailValue}</div>
        <div>입력한 비밀번호 : {pwValue}</div>
      </form>
  )
}

export default App;