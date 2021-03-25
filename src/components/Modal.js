import React, { useRef, useEffect } from 'react'

const Modal = ({ clickHandler }) => {
  const inpRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!inpRef.current.contains(e.target)) {
        clickHandler()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
    // eslint-disable-next-line
  }, [inpRef])

  return (
    <div className='modal-container'>
      <div className='modal-box' ref={inpRef}>
        <div className='modal-close' onClick={clickHandler}>
          X
        </div>
        <div className='modal-title'>New Modal</div>
        <div className='modal-body'>
          <label htmlFor=''>Name : </label>
          <input type='text' />
          <br />
          <label htmlFor=''>Email : </label>
          <input type='text' />
          <br />
          <label htmlFor=''>Mobile:</label>
          <input type='number' />
          <br />
        </div>
        <div className='modal-footer'>
          <button className='btn btn-primary' onClick={clickHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
