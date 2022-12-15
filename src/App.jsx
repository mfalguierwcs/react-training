import './App.css'
import Home from './components/pages/home'
import About from './components/pages/about'
import Categories from './components/pages/categories/index'
import Ships from './components/pages/categories/ships'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, Navigate } from 'react-router-dom'
import Planets from './components/pages/categories/planets'
import Header from './components/shared/header'
import Signup from './components/pages/signup'
import People from './components/pages/people'
import HelpWilder from './components/shared/helpWilder'
import { useState } from 'react'
import { wilders, getRandomWilder } from './utils/utils'
import Gifts from './components/pages/gifts'

function App() {
    const [wilderState, setWilderState] = useState("")
    const [wilderListeState, setWilderListeState] = useState(wilders)
    const changeWilder = () => {
        const randomWilder = getRandomWilder(wilderListeState)
        setWilderState(randomWilder);
        setWilderListeState(wilderListeState.filter(wilder => wilder !== randomWilder))
        if (wilderListeState.length === 1) {
            setWilderListeState(wilders)
        }
    }
    console.log(wilderListeState)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="/categories/ships" element={<Ships />} />
          <Route path="/categories/planets" element={<Planets />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <HelpWilder wilder={wilderState} handleClickCallback={changeWilder} />
    </div>
  )
}

export default App
