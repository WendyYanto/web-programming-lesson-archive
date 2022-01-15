import { Link, useNavigate } from 'react-router-dom'

import './index.css'

function Contact() {
  const navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <div className='contact'>
      <div className='contact-title'>Contact</div>
      <div className='contact-container'>
        <div className='contact-box'>
          Ini box
        </div>
      </div>
      {/* <button onClick={() => goToHome()}>Go To Home</button> */}
    </div>
  )
}

export default Contact
