import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='bg-slate-200 '>
      <div className='flex justify-between items-center mx-11 p-3'>
        <Link to="home">
        <h1 className='font-bold'>U</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to={'home'}><li>Home</li></Link>
          <Link to={'about'}><li>About</li></Link>
          <Link to={'profile'}><li>Sign In</li></Link>
        </ul>
      </div>
    </div>
  )
}
