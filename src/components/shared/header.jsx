import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  
  const routesLink = [
    {
      path: '/',
      label: 'Accueil',
    },
    {
      path: '/categories',
      label: 'Catégories',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/signup',
      label: 'Inscription',
    },
  ]
  return (
    <header className="py-4 border-solid border-2 shadow-sm mb-4">
      <div className="d-flex">
        <ul className="flex justify-end">
          {routesLink.map((data, index) => (
            <li className="mr-2" key={index}>
              <NavLink className={(navData) => navData.isActive ? "active" : "" } to={data.path}>{data.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
