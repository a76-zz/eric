import React from 'react'
import Entity from './Entity'
import Link from '../Link'
import s from './List.css'

const List = () => (
  <div>
    
  <Entity 
    poster={{
      src: '/mock/posters/bbc_theresa_may.jpg', 
      width: 246, height: 138
    }}

    item={{
      uri: '/', 
      title: "Theresa May 'won't be afraid' to challenge Donald Trump - BBC News", 
      description: "Theresa May says she won't be afraid to tell Donald Trump if he says or does anything she feels is unacceptable. The two will ...",
      duration: {
        mm: 15,
        ss: 32
      },
      channel:{
        name: 'BBC'
      } 
    }}
  />
  <Entity 
    poster={{
      src: '/mock/posters/bbc_theresa_may.jpg', 
      width: 246, height: 138
    }}

    item={{
      uri: '/', 
      title: "Theresa May 'won't be afraid' to challenge Donald Trump - BBC News", 
      description: "Theresa May says she won't be afraid to tell Donald Trump if he says or does anything she feels is unacceptable. The two will ...",
      duration: {
        mm: 15,
        ss: 32
      },
      channel:{
        name: 'BBC'
      } 
    }}
  />
  </div>
)

export default List 