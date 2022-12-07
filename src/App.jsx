import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown } from './store';
import './app.css'

function App() {
  const number = useSelector((상태객체) => {return 상태객체.number})
  const dispatch = useDispatch()
  const eventCountUp = () => {
    dispatch(countUp())
  }

  const eventCountDown = () => {
    dispatch(countDown())
  }

  return (
    <div>
      <p>카운트가 증감합니다. <span>{number}</span></p>
      <button onClick={eventCountUp}>카운트 업</button>
      <button onClick={eventCountDown}>카운트 다운</button>
    </div>
  )
}

export default App;