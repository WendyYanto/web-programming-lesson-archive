import Text from '../text'
import { UserContext } from "../../context/user-context"
import { useContext } from 'react'

function Paragraph(props) {
  const title = props.title
  const firstText = props.firstText
  const secondText = props.secondText

  const user = useContext(UserContext)

  return (
    <div>
      <h2>{title}</h2>
      <Text value={firstText} />
      <Text value={secondText} />
      <p>Created by {user}</p>
    </div>
  )
}

export default Paragraph
