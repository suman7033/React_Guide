import React from 'react'
import {Route} from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h2>the welcome page</h2>
      <Route path='/welcome/new-user'>
       <p>Welcome, new user</p>
      </Route>
    </div>
  )
}

export default Welcome
