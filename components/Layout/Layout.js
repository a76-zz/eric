import React, { PropTypes } from 'react'
import Header from './Header'
import Categories from './Categories'
import s from './Layout.css'

const Layout = ({children}) => (
  <div>
    <Header />
    <div className={s.content}>
      <Categories />
      <main>
        {children}
      </main>
    </div>
  </div>
)

export default Layout
