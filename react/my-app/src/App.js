import './App.css'
import { useEffect, useState } from 'react'

import Text from './components/text'
import ListItem from './components/list-item'

function App() {
  const [info, setInfo] = useState('Ini Saya')
  const [color, setColor] = useState('red')

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  // useEffect(() => {
  //   console.log('loading is changed')
  // }, [loading])

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
      <div>
        { loadComponent() }
      </div>
      <div>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    </div>
  )
}

export default App
