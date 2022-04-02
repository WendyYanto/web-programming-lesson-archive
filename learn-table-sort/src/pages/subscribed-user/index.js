import { useEffect, useState } from 'react'
import { createUser, getUsers, deleteUser, updateUser } from '../../firebase'

import './index.css'

const SubscribedUser = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [subscribed, setSubscribed] = useState('')

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
        subscribed = "hasn't subscribed"
      }

      const sentence = `${user.name} (${gender}) ${subscribed}`

      return (
        <div key={index}>
          {sentence}
          <button onClick={() => onClickDelete(user.id)}>Delete</button>
          <button onClick={() => onClickUpdateSubscription(user)}>Update Subscription</button>
        </div>
      )
    })
  }

  const onClickDelete = async (id) => {
    await deleteUser(id)
    loadUsers()
  }
  
  const onClickUpdateSubscription = async (user) => {
    const data = {
      ...user,
      subscribed: !user.subscribed
    }

    await updateUser(user.id, data)
    loadUsers()
  }

  const saveName = (event) => {
    setName(event.target.value)
  }

  const saveUser = async () => {
    await createUser(name, age, gender, subscribed)
    loadUsers()
  }

  const saveAge = (event) => {
    setAge(event.target.value)
  }

  const saveGender = (event) => {
    setGender(event.target.value)
  }

  const saveSubscribed = (event) => {
    setSubscribed(event.target.value)
  }

  return (
    <div>
      <h1>Subscribed User</h1>
      {renderUsers()}

      <div className="form">
        <input type="text" placeholder="Insert your name" onChange={saveName} />
        <input type="number" placeholder="Insert your age" onChange={saveAge} />

        <div className="form__gender">
          <input
            type="radio"
            name="gender"
            value="MALE"
            onChange={saveGender}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="FEMALE"
            onChange={saveGender}
          />{' '}
          Female
        </div>

        <div className="form__subscribed">
          <input
            type="radio"
            name="subscribed"
            value="true"
            onChange={saveSubscribed}
          />{' '}
          Subscribed
          <input
            type="radio"
            name="subscribed"
            value="false"
            onChange={saveSubscribed}
          />{' '}
          Not Subscribed
        </div>

        <button onClick={saveUser}>Submit</button>
      </div>
    </div>
  )
}

export default SubscribedUser
