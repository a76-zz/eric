import React from 'react'
import FeedEntity from './FeedEntity'
import { connect } from 'react-redux'
import s from './FeedList.css'

const FeedList = ({hubId, feedId, hubs, feeds, videos, posters, channels }) => {
  if (feeds && feeds.size > 0) {
    const hub = hubs.get(hubId)
    const feed = feeds.get(feedId || hub.get('defaultFeed'))

    const ids = feed.get('videos')

    const feedUi = ids.map(id => {
      const video = videos.get(id)
      const channel = channels.get(video.get('channel'))

      const posterMap = posters.get(video.get('poster'))

      const item = {
        uri: video.get('uri'),
        title: video.get('title'),
        description: video.get('description'),
        duration: {
          mm: video.getIn(['duration', 'mm']),
          ss: video.getIn(['duration', 'ss'])
        },
        channel: {
          name: channel.get('name')
        }
      }

      const poster = {
        src: posterMap.get('src'),
        width: posterMap.get('width'),
        height: posterMap.get('height')
      }

      return (
        <FeedEntity poster={poster} item={item} />
      )
    })

    return (
      <div>
        {feedUi}
      </div>
    )
  } else {

    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const cloud = state.get('cloud')

  return {
    hubs: cloud.get('hubs'),
    feeds: cloud.get('feeds'),
    videos: cloud.get('videos'),
    posters: cloud.get('posters'),
    channels: cloud.get('channels')
  }
}

export default connect(
  mapStateToProps
)(FeedList)
