import './App.css'
import Home from '../components/pages/home'
import About from '../components/pages/about'
import Categories from '../components/pages/categories/index'
import Ships from '../components/pages/categories/ships'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes, Navigate } from 'react-router-dom'
import Planets from '../components/pages/categories/planets'
import Header from '../components/shared/header'
import Signup from '../components/pages/signup'
import People from '../components/pages/people'
import { useState } from 'react'
import { getRandomWilder, wilders } from '../utils/utils'
import HelpWilder from '../components/shared/helpWilder'
import { useEffect } from 'react'
import Gifts from './gifts'

function App() {
  const [wilderList, setWilderList] = useState(wilders);
  const [currentWilder, setCurrentWilder] = useState();
  const wilderCallback = () => {
    setCurrentWilder(getRandomWilder(wilderList));
  }
  useEffect(() => {
    if (wilderList.length === 0) {
        setWilderList(wilders);
    } 
    if (currentWilder) {
        setWilderList(wilderList.filter((wilder) => {return wilder !== currentWilder}))
    }
    }, [currentWilder])

  console.log(wilderList)
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
        <Route path="gifts" element={<Gifts />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <HelpWilder wilderList={wilderList} currentWilder={currentWilder} wilderCallback={wilderCallback} />
    </div>
  )
}

export default App
