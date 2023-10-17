import React from 'react'
import {Link} from 'react-router-dom';

const MainHeader = () => {
  return (
    <header>
    <div>
      <ul>
        <li>
            <Link to='/welcome'>Welcome</Link>
        </li>
        <li>
            <Link to='/product'>Product</Link>
        </li>
      </ul>
    </div>
    </header>
  )
}

export default MainHeader
