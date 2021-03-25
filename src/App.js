import React, { useState, useEffect, createContext } from 'react'
import Modal from './components/Modal'
import Table from './components/Table'

export const GlobalContext = createContext()

function App() {
  const [show, setShow] = useState(false)
  const [info, setInfo] = useState([
    {
      name: 'Casey Maxwell',
      email: 'hedejuzi@mailinator.com',
      phone: '7485987458',
    },
  ])

  useEffect(() => {
    console.log(info)
  }, [show, info])

  const onAdd = (data) => {
    setInfo((prevState) => [...prevState, data])
    setShow(false)
  }

  const handleDelete = (data) => {
    const removedArr = info.filter((ele) => ele.email !== data)
    setInfo(removedArr)
  }

  const modalHandler = () => {
    setShow((prevState) => !prevState)
  }

  return (
    <GlobalContext.Provider
      value={{
        show,
        info,
        onAdd,
        handleDelete,
        modalHandler,
      }}>
      <div className='container'>
        <h1>React Modal Demo</h1>
        <button className='btn my-btn' onClick={modalHandler}>
          ADD NEW USER
        </button>
        {show && <Modal modalHandler={modalHandler} />}
        <Table />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
