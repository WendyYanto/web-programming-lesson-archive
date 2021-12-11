import './App.css'
import { useEffect, useState } from 'react'

import Text from './components/text'

function App() {
  const [info, setInfo] = useState('Ini Saya')
  const [color, setColor] = useState('red')

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  // setTimeout(() => {
  //   setInfo('Tulisan lain')
  // }, 5000)

  function loadComponent() {
    if (loading) {
      return <div>Loading...</div>
    } else {
      return <Text content={info} color={color} backgroundColor="green" />
    }
  }

  // IF 1

  // if (a) {
  //   b
  // } else {
  //   c
  // }

  // IF 2
  // a ? b : c

  return (
    <div>
      {
        loadComponent()
      }
    </div>
  )
}

export default App
