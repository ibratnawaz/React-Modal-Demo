import React, { useContext } from 'react'
import { GlobalContext } from '../App'

const Table = () => {
  const { info, handleDelete } = useContext(GlobalContext)

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {info.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>
                <div
                  className='icon-danger'
                  onClick={() => handleDelete(val.email)}>
                  Delete
                </div>
              </td>
            </tr>
          ))}
          {info.length === 0 && (
            <tr>
              <td colSpan='4' style={{ textAlign: 'center' }}>
                No data...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
