import React from 'react'
import Link from '../Link'
import s from './Categories.css'
import cx from 'classnames'

const Categories = () => (
  <aside className={s.sidebar}>
    <h2 className={s.title}>You</h2>
    <ul className={s.list}>
      <li className={cx(s.item, s.active)}>
        <Link to="">In progress</Link>
      </li>
      <li className={s.item}>
        <Link to="">Your Shows</Link>
      </li>
      <li className={s.item}>
        <Link to="">Your Channels</Link>
      </li>
      <li className={s.item}>
        <Link to="">You Might Like</Link>
      </li>
      <li className={s.item}>
        <Link to="">Recently Aired</Link>
      </li>
      <li className={s.item}>
        <Link to="">Favorites</Link>
      </li>
      <li className={s.item}>
        <Link to="">Bookmarks</Link>
      </li>
      <li className={s.item}>
        <Link to="">Purchases</Link>
       </li>
    </ul>
  </aside>
)

export default Categories
