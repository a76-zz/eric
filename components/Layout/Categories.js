import React from 'react'
import Link from '../Link'
import s from './Categories.css'

const Categories = () => (
  <aside className={s.sidebar}>
    <h2 className={s.title}>You</h2>
    <ul className={s.list}>
      <li className={s.item}>
        <Link to="">Continue</Link>
      </li>
      <li className={s.item}>
        <Link to="">Favorites</Link>
      </li>
      <li className={s.item}>
        <Link to="">Purchases</Link>
       </li>
    </ul>
  </aside>
)

export default Categories
