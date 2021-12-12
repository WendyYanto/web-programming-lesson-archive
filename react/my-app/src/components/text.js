// import './text.css'

import { useEffect } from 'react'

function Text(props) {
  const content = props.content
  const color = props.color || 'red'
  const backgroundColor = props.backgroundColor || 'black'

  useEffect(() => {
    // mounting
    // window.addEventListener('click', windowClicked)
    console.log('Text is mounted')

    return () => {
      // unmounting
      console.log('Text is unmounted')
      // window.removeEventListener('click', windowClicked)
    }
  }, [])

  // function windowClicked() {
  //   console.log('window is clicked')
  // }

  useEffect(() => {
    // mounting && updating
    console.log('Content is updated')
  }, [content])

  useEffect(() => {
    // mounting && updating
    console.log('Color is updated')
  }, [color])

  function onDivClicked() {
    console.log('div is clicked')
  }

  return (
    <div 
      // onClick={() => console.log('div is clicked')}
      onClick={onDivClicked}
      className="text"
      style={{ color, backgroundColor, fontSize: '50px' }}>
        { content }
    </div>
  )
}

export default Text
