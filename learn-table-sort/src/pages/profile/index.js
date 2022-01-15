import { Link, useParams, useSearchParams } from 'react-router-dom'

function Profile() {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const username = params.username
  const photoName = params.photoName

  const colorValue = searchParams.get('color')

  return (
    <div style={{'color': colorValue}}>
      <Link to="/">Home</Link>
      <p>Profile page of {username}</p>
      <p>Photo: {photoName}</p>
    </div>
  )
}

export default Profile
