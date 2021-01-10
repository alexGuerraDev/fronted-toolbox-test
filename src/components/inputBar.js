import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { addText } from '../redux/actions'
// URI of backend toolbox test
const URL = 'https://backend-toolbox-test.alexguerradev.repl.co'

const InputBar = (props) => {
  const [text, setText] = useState('')
  const sendText = async () => {
    const response = await fetch(`${URL}/iecho?text=${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    props.addText({ ...data, original: text })
    setText('')
  }

  return (
    <div className='row justify-content-md-center m-5'>
      <div className='col-sm-10'>
        <input
          type='text'
          onChange={({ target: { value } }) => setText(value)}
          className='form-control'
          id='text'
          value={text}
          placeholder='any text'
        />
      </div>
      <div className='col-sm-2'>
        <button
          type='submit'
          onClick={sendText}
          disabled={!text || !text.trim()}
          className='btn btn-primary mb-3'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default connect(null, { addText })(InputBar)