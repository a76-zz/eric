import React from 'react'
import Link from '../Link'
import s from './Navigation.css'

const Navigation = () => (
  <nav className={s.navigation}>
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="">You</Link>
      </li>
      <li className={s.item}>
        <Link to="">Live Tv</Link>
      </li>
      <li className={s.item}>
        <Link to="/about">On Demand</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
