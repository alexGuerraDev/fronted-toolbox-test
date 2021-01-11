import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { addText } from '../redux/actions'
// URI of backend toolbox test
const URL = 'https://backend-toolbox-test.alexguerradev.repl.co'

const InputBar = ({ setLoading, setErr, addText: add }) => {
  const [text, setText] = useState('')
  const [disabled, setDisabled] = useState(false)

  const sendText = async () => {
    setLoading(true)
    setDisabled(true)
    const response = await fetch(`${URL}/iecho?text=${text}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status !== 200) setErr(true)
    const data = await response.json()
    if (data) {
      setLoading(false)
      setDisabled(false)
      add({ ...data, original: text })
      setText('')
    }
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
          disabled={disabled || !text || !text.trim()}
          className='btn btn-primary mb-3'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default connect(null, { addText })(InputBar)