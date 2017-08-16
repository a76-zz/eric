import React from 'react'
import Link from '../Link'
import s from './MainHeader.css'


const MainHeader = ({feed}) => {  
  const title = feed.get('title')

  return (
    <header className={s.header}>
      <div>
          <div className={s.breadcrumbs}>
              <Link to="/">Home</Link> ∙ {title}
          </div>
          <h1 className={s.title}>{title}</h1>
      </div>
      <div>
          <ul className={s.options}>
              <li className={s.option}>
                  <span className={s['option-name']}>Sort By:</span>
                  <Link to="">
                      <strong className={s.active}>Newrest</strong>
                  </Link>
                  <i className="material-icons">keyboard_arrow_right</i>
              </li>
              <li className={s.option}>
                  <Link to="">
                      <span>Filter</span>
                  </Link>
                  <i className="material-icons">keyboard_arrow_right</i>
              </li>
          </ul>
      </div>
    </header>
  )
}

export default MainHeader
