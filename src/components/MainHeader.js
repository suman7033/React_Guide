import React from 'react'
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.css'

const MainHeader = () => {
  return (
    <header>
    <div className={classes.div}>
      <ul>
        <div>
        <li className={classes.wel}>
            <NavLink to='/welcome'>Welcome
            </NavLink>
        </li>
        </div>
        <div className={classes.pro}>
         <li>
            <NavLink to='/products'>Products
            </NavLink>
        </li>
        </div>
      </ul>
    </div>
    </header>
  )
}

export default MainHeader
