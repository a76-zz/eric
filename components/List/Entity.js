import React from 'react'
import Link from '../Link'
import s from './Entity.css'

const Entity = ({poster: {src, width, height}, item: {uri, title, description, time: {hh, mm, ss}, channel: {name }}}) => (
  <div className={s.entity}>
    <div className={s.thumbnail}>
      <Link to={uri}>
        <div className={s.thumb}>
          <img src={src} width={width} height={height}></img>
          <span className={s.time}>{`${hh}:${mm}:${ss}`}</span>
        </div>
      </Link>
    </div>
    <div className={s.content}>
      <h3 className={s.title}>
        <Link to={uri} title={title}>{title}</Link>
      </h3>
      <div className={s.byline}>{name}</div>
      <div className={s.meta}></div>
      <div className={s.description}>{description}</div>
    </div>
  </div>
)

export default Entity