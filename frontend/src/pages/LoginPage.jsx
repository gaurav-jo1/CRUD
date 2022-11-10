import React from 'react'
import {Link} from "react-router-dom"
import "../styling/LoginPage.scss"

const LoginPage = () => {
  return (
    <div className='LoginPage_container'>
      <form >
        <label >
          Enter username: &nbsp;
        <input type="text" />
        </label>
        <label >
          Enter password: &nbsp;
        <input type="password"  />
        </label>
        <input type="submit" />
      </form>
      <div className="LoginPage_signup-link">
        <Link to="/signup"> <p>Sign Up</p> </Link> 
      </div>
    </div>
  )
}

export default LoginPage
