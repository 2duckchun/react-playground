import './app.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [axiosPokeMon, setAxiosPokeMon] = useState(undefined)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=6')

  const previousUrl = () => {
    axios.get(url)
    .then((data) => {
      const previous = data.data.previous
      console.log(previous)
      if (previous !== null) {
        setUrl(previous)
      }
    })
  }

  const nextUrl = () => {
    axios.get(url)
    .then((data) => {
      const next = data.data.next
      console.log(next)
      if (next !== null) {
        setUrl(next)
      }
    })
  }

  useEffect(() => {
    axios.get(url)
    .then((data) => {
    setAxiosPokeMon(data.data.results)
    })
  }, [url])

  return (
    <main className='main'>
      <div className='button-box'>
      <button onClick={previousUrl} className="btn-previous">Previous</button>
      <button onClick={nextUrl} 
      className="btn-previous">Next</button>
      </div>

      <div className='book'>
        {axiosPokeMon !== undefined ? 
        <>
          {axiosPokeMon.map((e, i) => 
          <PokemonRender name={e.name} url={e.url} />)} 
        </>
        : null}
      </div>
    </main>
  )
}

function PokemonRender({name, url}) {
  const [pokeInfo, setPokeInfo] = useState(undefined)

  useEffect(() => {
    axios.get(url)
    .then((poke) => {
      console.log('왜안댕')
      setPokeInfo({
        weight: poke.data.weight,
        imgUrl: poke.data.sprites.front_default})
    })
  }, [name])

  return (
    <div className='page' onClick={() => {alert(name)}}>
      {pokeInfo !== undefined ? 
      <>
        <h3>{name}</h3>
        <img src={pokeInfo.imgUrl} alt={name}></img>
        <p>{pokeInfo.weight}</p>
      </> : null}
    </div>
  )
}

export default App;