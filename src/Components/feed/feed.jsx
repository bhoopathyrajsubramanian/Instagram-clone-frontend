import React from 'react'
import { Post } from './post'
import './feed.scss'

export const Feed = () => {
  return (
    <div className='feed'>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
