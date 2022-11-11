import React from 'react'
import {Link} from "react-router-dom"

const SignupPage = () => {
  return (
    <div>
      <h1>Signup Page</h1>
      <p> <Link to="/login">Log In</Link> </p>
    </div>
  )
}

export default SignupPage