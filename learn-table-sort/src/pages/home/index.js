import Table from '../../components/Table'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  function goToContact() {
    navigate('/contact')
  }

  return (
    <div>
      <h1>React Sort Table</h1>
      <div>
        <Link to="/about-me">To About</Link>
      </div>
      <Table />
      <button onClick={() => goToContact()}>Go To Contact</button>
      <button onClick={goToContact}>Go To Contact</button>
    </div>
  )
}

export default Home
