import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <nav>
            <Link to='create'>Create</Link>
            <Link to='read'>Read</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default RootLayout;