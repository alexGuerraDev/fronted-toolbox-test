import React from 'react'
import { removeText, removeAll } from '../redux/actions'
import { connect, useSelector } from 'react-redux'

export const ListText = (props) => {
  const listText = useSelector(state => state.listText)
  return (
    listText.length > 0 ?
      <div className="container listContainer">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Original</th>
              <th scope="col">Reverse</th>
              <th scope="col">Palindrome</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listText.map((text, key) =>
                <tr key={key}>
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
                    <button type='button' className='btn btn-danger' onClick={() => props.removeText({ key })}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <button type='button' className='btn btn-danger' onClick={() => props.removeAll()}>Remove all</button>
      </div>
      :
      <div className='row align-items-center'>
        <p>THERE ARE NOT DATA</p>
      </div>
  )
}

export default connect(null, { removeText, removeAll })(ListText)