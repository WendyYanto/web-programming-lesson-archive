import Table from '../../components/Table'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/card'

import { UserContext } from '../../context/user-context'
import { useEffect, useState } from 'react'

import axios from 'axios'

function Home() {
  const [post, setPost] = useState({})
  const navigate = useNavigate()

  function goToContact() {
    navigate('/contact')
  }
  
  useEffect(() => {
    // componentDidMount
    // function getPost() {
    //   axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => {
    //       console.log(response)
    //       console.log('udah kelar ya')
    //     })
    //     .catch(errorResponse => console.log(errorResponse))

    //   console.log("saya sudah panggil")
    // }

    async function getPost() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/25")
      setPost(response.data)
    }

    getPost()
    // disini seperti biasa , ga perlu nunggu
    return () => {
      // componentWillUnMount
    }
  }, [])

  return (
    <UserContext.Provider value="James">
      <div>
        <h1>React Sort Table</h1>
        <p>{ post.title }</p>
        <div>
          <Link to="/about-me">To About</Link>
          <Card
            imageUrl="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg"
            title="Burger"
            firstText="Burger firstText"
            secondText="Burger secondText"
          />
          <Card
            imageUrl="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/nft.jpg"
            title="This is NFT"
            firstText="This is NFT firstText"
            secondText="This is NFT secondText"
          />
        </div>
        <Table />
        <button onClick={() => goToContact()}>Go To Contact</button>
        <button onClick={goToContact}>Go To Contact</button>
      </div>
    </UserContext.Provider>
  )
}

export default Home
