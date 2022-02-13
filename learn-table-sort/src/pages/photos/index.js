import Card from '../../components/card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Photos() {
  const [photo, setPhoto] = useState({})
  const [loading, setLoading] = useState(false)
  const params = useParams()

  useEffect(() => {
    // componentDidMount

    function getPhoto() {
      setLoading(true)
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
        .then((response) => {
          setLoading(false)
          setPhoto(response.data)
        })
    }

    getPhoto()

    return () => {
      // componentWillUnMount
    }
  }, [])

  return (
    <div>
      <h2>Photo</h2>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Card
          imageUrl={photo.thumbnailUrl}
          title={photo.title}
          firstText={`ID : ${photo.id}`}
          secondText={photo.albumId}
        />
      )}
    </div>
  )
}

export default Photos
