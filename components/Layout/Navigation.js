import React from 'react'
import Link from '../Link'
import s from './Navigation.css'

const Navigation = ({hubs}) => {
  let hubsUi = null

  if (hubs && hubs.size > 0) {
    hubsUi = hubs.map(hub => {
      return (
        <li className={s.item}>
          <Link to="">{hub.get('title')}</Link>
        </li>
      )
    })
  }

  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        {hubsUi}
      </ul>
    </nav>
  )
}

export default Navigation
