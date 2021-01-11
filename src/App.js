import React, { useState } from 'react'
import InputBar from './components/inputBar'
import ListText from './components/listText'

const App = () => {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
        <div className="container">
            <InputBar setErr={setErr} setLoading={setLoading} />
            <ListText err={err} loading={loading} />
        </div>
    )
}

export default App