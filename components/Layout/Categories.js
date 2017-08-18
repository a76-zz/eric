import React from 'react'
import Link from '../Link'
import { resolveRoute } from '../../routes'
import s from './Categories.css'
import cx from 'classnames'

const Categories = ({feeds, hub, feed}) => {
  const feedId = feed.get('id')
  const hubId = hub.get('id')

  const feedsUi = feeds.valueSeq().map(feed => {
    const id = feed.get('id')
    const to = resolveRoute('feed', {hubId, feedId: id})

    const className = id === feedId ? cx(s.item, s.active) : s.item
    return (
      <li key={id} className={className}>
        <Link to={to}>{feed.get('title')}</Link>
      </li>
    )
  })

  const headerUi = <h2 className={s.title}>{hub.get('title')}</h2>

  return (
    <aside className={s.sidebar}>
      {headerUi}
      <ul className={s.list}>
        {feedsUi}
      </ul>
    </aside>
  )
}

export default Categories
