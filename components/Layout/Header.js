import React from 'react'
import Link from '../Link'
import Navigation from './Navigation'
import s from './Header.css'

const Header = ({ hubs }) => (
  <div className={s.shell}>
    <header className={s.content}>
      <div>
        <div className={s.logo}>
          <Link to="/">Digital Television</Link>
        </div>
        <Navigation hubs={hubs} />
      </div>
      <div className={s.menu}>
        <Link to="">
          <i className="material-icons">search</i>
        </Link>
        <Link to="">
          <i className="material-icons">account_circle</i>
        </Link>
        <Link to="">
          <i className="material-icons">settings</i>
        </Link>
      </div>
    </header>
  </div>
)

export default Header
