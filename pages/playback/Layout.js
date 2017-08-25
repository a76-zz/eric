import React, { PropTypes } from 'react'
import Header from '../../components/Layout/Header'
import s from './Layout.css'
import { connect } from 'react-redux'

const Layout = ({hubs, children}) => {
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
)(Layout)
