import React, { useState, useEffect } from 'react'
import Modal from './components/Modal'

function App() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    console.log(show)
  }, [show])

  const clickHandler = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <div className='container'>
      <h1>React Modal Demo</h1>
      <button className='btn my-btn' onClick={clickHandler}>
        Show Modal
      </button>
      {show && <Modal clickHandler={clickHandler} />}
    </div>
  )
}

export default App
