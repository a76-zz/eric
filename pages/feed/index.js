import React, { PropTypes } from 'react'
import Layout from './Layout'
import FeedList from '../../components/FeedList'
import s from './styles.css'

const FeedPage = ({params}) => {
  const {hubId, feedId} = params

  return (
    <Layout hubId={hubId} feedId={feedId}>
      <FeedList hubId={hubId} feedId={feedId} />
    </Layout>
  )
}

export default FeedPage
