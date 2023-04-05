import { useEffect, useState } from 'react'
import pattern from '../assets/pattern-divider-desktop.svg'

function App() {
  const [text, setText] = useState()
  const [number, setNumber] = useState()

  async function getAdvice(){
    const fetching = await fetch('https://api.adviceslip.com/advice')
    const {slip} = await fetching.json()
      
    setNumber(slip.id)
    setText(slip.advice)
  }

  useEffect(()=> {
    getAdvice()
  }, [])
  
  function fetchData(){
    getAdvice()
  }

  return (
    <div className="card">
      <h1> Advice #{number} </h1>
      <h2 className="advice-text"> “{text}” </h2>
      <img src={pattern} alt="pattern" />
      <div className="button" onClick={fetchData}></div>
    </div>
  )
}

export default App
