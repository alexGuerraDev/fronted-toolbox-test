import React from 'react'
import InputBar from './components/inputBar'
import ListText from './components/listText'

import { shallow } from 'enzyme'

it('Render without crashing', () => {
  shallow(
    <div className="container">
      <InputBar />
      <ListText />
    </div>
  )
})