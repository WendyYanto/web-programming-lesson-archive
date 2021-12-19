function ListItem(props) {
  // const title = props.content
  // const content = props.content 

  // Object destructuring
  const { content } = props

  return <li>{content}</li>
}

export default ListItem