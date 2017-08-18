import React, { PropTypes } from 'react'
import FeedLayout from '../../components/Layout/FeedLayout'
import FeedList from '../../components/FeedList'
import s from './styles.css'

const FeedPage = ({params}) => {
  const {hubId, feedId} = params

  return (
    <FeedLayout hubId={hubId} feedId={feedId}>
      <FeedList hubId={hubId} feedId={feedId} />
    </FeedLayout>
  )
}

export default FeedPage
