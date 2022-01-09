import './App.css'
import { useEffect, useState } from 'react'

import Text from './components/text'
import ListItem from './components/list-item'

function App() {
  const [info, setInfo] = useState('Ini Saya')
  const [color, setColor] = useState('red')

  const [loading, setLoading] = useState(true)

  const names = ["Wendy", "Yanto", "Ferdy", "James", "Jimmy"]

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

  const clickedItems = []

  function onListItemClick(content) {
    // alert('Clicked')
    alert(`Clicked: ${content}`)
    clickedItems.push(content)
    console.log(clickedItems)
  }

  function loadNames() {
    return names.map(name => <ListItem
      key={name} 
      content={name} 
      onListItemClick={onListItemClick} />)
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
    <div className='App'>
      <div>
        { loadComponent() }
      </div>
      <div className='list-item-wrapper'>
        <ul>
        { loadNames() }
        </ul>
      </div>
    </div>
  )
}

export default App
