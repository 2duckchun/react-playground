import { useState } from 'react'
import './app.css'
import Modification from './Modification'

function App() {
  const [상품명, set상품명] = useState(null)
  const [가격, set가격] = useState(null)
  const [판매링크, set판매링크] = useState(null)
  const [스위치, set스위치] = useState(false)

  return (
    <div>
      <p>상품명 : {스위치 && 상품명}</p>
      <p>가격 : {스위치 && 가격}</p>
      <p>판매 링크 : {스위치 && 판매링크}</p>
      <Modification set상품명={set상품명} set가격={set가격} set판매링크={set판매링크} />
      <button onClick={() => {
        const 복사본 = 스위치
        set스위치(!복사본)
      }}>전송</button>
    </div>
  )
}

export default App;