import axios from 'axios'
import { useEffect, useState } from 'react'

const User = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
      )
      setUser(response.data)
    }

    getUser()
  }, [])

  return (
    <div>
      <p>Name: {user.name || ''}</p>
      <p>Email: {user.email || ''}</p>
      {/* <p>Address: {(user.address && user.address.city) || ''}</p>
      <p>Company Name: {(user.company && user.company.name) || ''}</p> */}
      <p>Phone: {user.phone || ''}</p>
    </div>
  )
}

export default User
