import React from "react"
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Поиск
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link exact="true" to="/" className="nav-link">Главная</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Информация</Link>
      </li>
    </ul>
  </nav>
)