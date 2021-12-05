// import './text.css'

function Text(props) {
  const content = props.content
  const color = props.color || 'red'
  const backgroundColor = props.backgroundColor || 'black'

  return (
    <div className="text" style={{ color, backgroundColor }}>
      { content }
    </div>
  )
}

export default Text