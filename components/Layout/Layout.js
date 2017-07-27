import React, { PropTypes } from 'react'
import Header from './Header'
import s from './Layout.css'

const Layout = ({children}) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
  </div>
)

export default Layout
