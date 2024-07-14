import React from 'react'
import { Header } from './components/index'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <Header />
    <Outlet />

    </>
  )
}

export default App
