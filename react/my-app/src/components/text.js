// import './text.css'

import { useEffect } from "react"

function Text(props) {
  const content = props.content
  const color = props.color || 'red'
  const backgroundColor = props.backgroundColor || 'black'

  useEffect(() => {
    // mounting
    console.log('Text is mounted')

    return () => {
      console.log('Text is unmounted')
    }
  }, [])

  return (
    <div className="text" style={{ color, backgroundColor, fontSize:'50px' }}>
      { content }
    </div>
  )
}

export default Text