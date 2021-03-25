import React, { useRef, useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../App'

const Modal = () => {
  const inpRef = useRef()

  const { onAdd, modalHandler } = useContext(GlobalContext)

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
  })

  useEffect(() => {
    let handler = (e) => {
      if (!inpRef.current.contains(e.target)) {
        modalHandler()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
    // eslint-disable-next-line
  }, [inpRef])

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(details)
    onAdd(details)
  }

  return (
    <div className='modal-container'>
      <div className='modal-box' ref={inpRef}>
        <div className='modal-close' onClick={modalHandler}>
          X
        </div>
        <div className='modal-title'>New Modal</div>
        <div className='modal-body'>
          <form onSubmit={submitHandler}>
            <label htmlFor='name'>Name : </label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor='email'>Email : </label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor='phone'>Mobile:</label>
            <input
              type='number'
              id='phone'
              name='phone'
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <button className='btn btn-success'>Add</button>
          </form>
        </div>
        <div className='modal-footer'>
          <button className='btn btn-primary' onClick={modalHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
