import React from 'react'
import Link from '../Link'
import { resolveRoute } from '../../routes'
import s from './Navigation.css'

const Navigation = ({hubs}) => {
  let hubsUi = null

  if (hubs && hubs.size > 0) {
    hubsUi = hubs.valueSeq().map(hub => {
      const id = hub.get('id')
      const to = resolveRoute('hub', {hubId: id})

      return (
        <li key={id} className={s.item}>
          <Link to={to}>{hub.get('title')}</Link>
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
