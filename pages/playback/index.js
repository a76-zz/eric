import React from 'react'
import Layout from './Layout'
import { Player } from 'video-react'
import { uri } from 'eric-config'
import { connect } from 'react-redux'

const Playback = ({params, videos}) => {
  if (videos) {
      const { videoId } = params
      const name = videos.getIn([videoId, 'uri'])
      const src = `${uri}/${name}`

      return (
        <Layout>
          <Player
            playsInline
            poster="/assets/poster.png"
            src={src}
          />
        </Layout>
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
    videos: cloud.get('videos')
  }
}

export default connect(
  mapStateToProps
)(Playback)
