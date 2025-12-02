import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((respone) =>{
      setJokes(respone.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  })

  return (
    <>
    <h1>Chai and FullStack</h1>
    <p>Jokes: {jokes.length}</p>
    {
      jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
