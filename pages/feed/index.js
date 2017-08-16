import React, { PropTypes } from 'react'
import FeedLayout from '../../components/Layout/FeedLayout'
import List from '../../components/List'
import s from './styles.css'

const FeedPage = ({params}) => {
  const {hubId, feedId} = params

  return (
    <FeedLayout hubId={hubId} feedId={feedId}>
      <List />
    </FeedLayout>
  )
}

export default FeedPage
