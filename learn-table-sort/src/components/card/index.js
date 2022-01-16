import Paragraph from '../paragraph'

import './index.css'

function Card(props) {
  const imageUrl = props.imageUrl
  const title = props.title
  const firstText = props.firstText
  const secondText = props.secondText

  return (
    <div className='card'>
      <img
        width="100"
        height="100"
        src={imageUrl}
      />
      <Paragraph
        title={title}
        firstText={firstText}
        secondText={secondText}
      />
    </div>
  )
}

export default Card