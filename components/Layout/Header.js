import React from 'react'
import Link from '../Link'
import Navigation from './Navigation'
import s from './Header.css'

const Header = () => (
  <header className={s.header}>
    <div>
      <div className={s.logo}>
        <Link to="/">Digital Television</Link>
      </div>
      <Navigation />
    </div>
    <div className={s.menu}>
      <Link to="">
        <i className="material-icons">settings</i>
      </Link>
      <Link to="">
        <i className="material-icons">account_circle</i>
      </Link>
    </div>
  </header>
)

export default Header
