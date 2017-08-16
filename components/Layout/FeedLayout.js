import React, { PropTypes } from 'react'
import Header from './Header'
import Categories from './Categories'
import MainHeader from './MainHeader'
import s from './Layout.css'
import { connect } from 'react-redux'

const FeedLayout = ({hubs, feeds, hubId, feedId, children}) => {
  if (feeds && feeds.size > 0) {

    const hub = hubs.get(hubId) 
    const feed = feeds.get(feedId || hub.get('defaultFeed'))

    return (
      <div>
        <Header hubs={hubs} />
        <div className={s.content}>
          <Categories feeds={feeds} hub={hub} feed={feed} />
          <main>
            <MainHeader feed={feed} />

            {children}
          </main>
        </div>
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
    feeds: cloud.get('feeds')
  }
}

export default connect(
  mapStateToProps
)(FeedLayout)
