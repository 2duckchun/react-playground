import React from 'react'

export default function Modification({set상품명, set가격, set판매링크}) {
  const handleInput = (event) => {
    if (event.target.name === "상품명") set상품명(event.target.value)
    else if (event.target.name === "가격") set가격(event.target.value)
    else if (event.target.name === "판매링크") set판매링크(event.target.value)
    console.log('됨');
  }


  return (
    <div>
      <input type="text" name="상품명" placeholder='상품명' onChange={handleInput}></input>
      <input type="text" name="가격" placeholder='가격' onChange={handleInput}></input>
      <input type="text" name="판매링크" placeholder='판매링크' onChange={handleInput}></input>
    </div>
  )
}
