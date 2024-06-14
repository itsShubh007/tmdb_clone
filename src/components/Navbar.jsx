import React from 'react'
import Logo from '../movie_logo.jpg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border space-x-7 items-center pl-3 py-4'>
        <img className='w-[50px]'  src={Logo} />
        <Link className='text-blue-500 text-3xl font-bold' to='/'>Home</Link>
        <Link className='text-blue-500 text-3xl font-bold' to='/watchlist'>Watchlist</Link>
    </div>
  )
}

export default Navbar