import React, { PropTypes } from 'react'
import Header from './Header'
import Categories from './Categories'
import MainHeader from './MainHeader'
import s from './Layout.css'
import { connect } from 'react-redux'

const Layout = ({route, hubs, feeds, hub, feed, children}) => {
  console.log(hubs);
  return (
    <div>
      <Header hubs={hubs} />
      <div className={s.content}>
        <Categories />
        <main>
          <MainHeader />

          {children}
        </main>
      </div>
    </div>
  )
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
)(Layout)
