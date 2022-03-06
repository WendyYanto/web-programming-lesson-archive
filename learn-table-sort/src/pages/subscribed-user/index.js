import { useEffect, useState } from 'react'
import { createUser, getUsers } from '../../firebase'

const SubscribedUser = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    const response = await getUsers()
    setUsers(response)
    console.log(response)
  }

  const renderUsers = () => {
    return users.map((user, index) => {
      let gender = ''

      if (user.gender == 'MALE') {
        gender = 'Male'
      } else {
        gender = 'Female'
      }
      
      let subscribed = ''
      
      if (user.subscribed) {
        subscribed = 'has subscribed'
      } else {
        subscribed = 'hasn\'t subscribed'
      }
      
      const sentence = `${user.name} (${gender}) ${subscribed}`

      return <div key={index}>{sentence}</div>
    })
  }

  const saveName = (event) => {
    setName(event.target.value)
  }

  const saveUser = async () => {
    await createUser(name)
    loadUsers()
  }

  return (
    <div>
      <h1>Subscribed User</h1>
      { renderUsers() }

      <div>
        <input type='text' placeholder='Insert your name' onChange={saveName} />
        <button onClick={saveUser}>Submit</button>
      </div>
    </div>
  )
}

export default SubscribedUser
