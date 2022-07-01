import { useState, useEffect } from 'react'
// import logo from '@/assets/images/logo.svg'
import './App.css'
import routes from "@/routes/index"
import Layout from "@/pages/layout"

import { useRoutes } from "react-router-dom";


function App() {
  let element = useRoutes(routes);
  return (
    <div className="App">
      <Layout />
      {element}
    </div>
  )
}

export default App
