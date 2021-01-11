import React from 'react'
import { removeText, removeAll } from '../redux/actions'
import { connect, useSelector } from 'react-redux'

export const ListText = ({ loading = false, removeAll, removeText, err = false }) => {
  const listText = useSelector(state => state.listText)

  if (err) return (
    <div className="alert alert-danger text-center" role="alert">
      Server error
    </div>
  )

  if (listText.length === 0) return (
    <div className='row align-items-center'>
      <div className='col-sm-12 text-center'>
        {loading && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <p className="text-center">THERE ARE NOT DATA</p>
      </div>
    </div>
  )

  return (
    <div className="container listContainer">
      <table className="table table-striped table-hover table-bordered border-light">
        <thead>
          <tr className="text-center">
            <th scope="col">Original</th>
            <th scope="col">Reverse</th>
            <th scope="col">Palindrome</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            listText.map((text, key) =>
              <tr key={key} className="text-center">
                <td>
                  <p>{text.original}</p>
                </td>
                <td>
                  <p>{text.text}</p>
                </td>
                <td>
                  <p>{String(text.palindrome)}</p>
                </td>
                <td>
                  <button type='button' className='btn btn-danger' onClick={() => removeText({ key })}>Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {loading && (
        <div className="col-sm-12 text-center m-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <button type='button' className='btn btn-danger' onClick={() => removeAll()}>Remove all</button>
    </div>

  )
}

export default connect(null, { removeText, removeAll })(ListText)