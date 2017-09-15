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
      const poster = posters.get(video.get('poster'))
      const channel = channels.get(video.get('channel'))

      return (
        <FeedEntity video={video} poster={poster} channel={channel} key={id} />
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
