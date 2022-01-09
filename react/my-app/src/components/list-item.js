function ListItem(props) {
  // const title = props.content
  // const content = props.content 

  // Object destructuring
  const { content, onListItemClick } = props

  return <li onClick={() => onListItemClick(content)}>{content}</li>
}

export default ListItem