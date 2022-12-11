import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Main from './Main'
import Add from './Add'
import Fake from './Fake'
import FakeValidate from './FakeValidate'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main' element={<Main />} />
      <Route path='/add' element={<Add />} />
      <Route path='/fake' element={<Fake />} />
      <Route path='/fakeTrue' element={<FakeValidate value={true} />} />
      <Route path='/fakeFalse' element={<FakeValidate value={false} />} />
    </Routes>
  )
}

export default App