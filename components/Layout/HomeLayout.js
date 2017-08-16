import React, { PropTypes } from 'react'
import Header from './Header'
import s from './Layout.css'
import { connect } from 'react-redux'

const HomeLayout = ({hubs, children}) => {
  return (
    <div>
      <Header hubs={hubs} />
      <div className={s.content}>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  const cloud = state.get('cloud')

  return {
    hubs: cloud.get('hubs')
  }
}

export default connect(
  mapStateToProps
)(HomeLayout)
