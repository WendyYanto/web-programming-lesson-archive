import './App.css'
import { useEffect, useState } from 'react'

import Text from './components/text'

function App() {
  const [info, setInfo] = useState(10)
  const [color, setColor] = useState('red')
  const [intervalId, setIntervalId] = useState(0)

  // 1s = 1000ms
  const id = setInterval(() => {
    const newInfo = info - 1
    setInfo(newInfo)
    setColor('blue')

    clearTimeout(id)
    setIntervalId(id)
  }, 1000)

  return (
    <div>
      <Text content={info} color={color} backgroundColor="green" />
      {/* 
      <Text content="Halo 2" color="green" backgroundColor="blue" />
      <Text content="Halo 3" color="blue" backgroundColor="red" />
      <Text content="Halo 4" /> 
      */}
    </div>
  )
}

export default App
