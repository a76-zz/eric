import React, { PropTypes } from 'react'
import Layout from '../../components/Layout'
import List from '../../components/List'
import s from './styles.css'


const FeedPage = (route) => {
  return (
    <Layout route={route}>
      <List />
    </Layout>
  )
}

export default FeedPage
