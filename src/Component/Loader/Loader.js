import React from 'react'
import './loader.css'

export default function Loader() {
  return (
    <div className='loader__container'>
      <div className='loader_body'>
        <div className='loader'>
          <div className='loader_child top_left'></div>
          <div className='loader_child top_right'></div>
          <div className='loader_child bottom_left'></div>
          <div className='loader_child bottom_right'></div>
        </div>
      </div>
    </div>
  )
}
