import React from 'react'
import Link from '../Link'
import s from './FeedEntity.css'

const FeedEntity = ({poster: {src, width, height}, item: {uri, title, description, duration: {hh, mm, ss}, channel: {name }}}) => (
  <div className={s.entity}>
    <div className={s.thumbnail}>
      <Link to={uri}>
        <div className={s.thumb}>
          <img src={src} width={width} height={height}></img>
          <span className={s.duration}>{`${hh ? hh + ':' : ''}${mm}:${ss}`}</span>
        </div>
      </Link>
    </div>
    <div className={s.content}>
      <h3 className={s.title}>
        <Link to={uri} title={title}>{title}</Link>
      </h3>
      <div className={s.channel}>{name}</div>
      <div className={s.meta}></div>
      <div className={s.description}>{description}</div>
    </div>
  </div>
)

export default FeedEntity
