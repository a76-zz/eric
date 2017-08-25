import React from 'react'
import Layout from './Layout'
import { Player } from 'video-react'

const Playback = () => {
  return (
    <Layout>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </Layout>
  )
}

export default Playback
