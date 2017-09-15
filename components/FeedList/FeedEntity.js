import React from 'react'
import Link from '../Link'
import { resolveRoute } from '../../routes'
import s from './FeedEntity.css'

const FeedEntity = ({video, poster, channel}) => {

  const to = resolveRoute('playback', {videoId: video.get('id')})
  const title = video.get('title')

  return (
      <div className={s.entity}>
        <div className={s.thumbnail}>
          <Link to={to}>
            <div className={s.thumb}>
              <img src={poster.get('src')} width={poster.get('width')} height={poster.get('height')}></img>
              <span className={s.duration}>{`${video.getIn(['duration', 'hh']) ? video.getIn(['duration', 'hh']) + ':' : ''}${video.getIn(['duration', 'mm'])}:${video.getIn(['duration', 'ss'])}`}</span>
            </div>
          </Link>
        </div>
        <div className={s.content}>
          <h3 className={s.title}>
            <Link to={to} title={title}>{title}</Link>
          </h3>
          <div className={s.channel}>{channel.get('name')}</div>
          <div className={s.meta}></div>
          <div className={s.description}>{video.get('description')}</div>
        </div>
      </div>
  )
}

export default FeedEntity
