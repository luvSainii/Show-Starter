import React from 'react'
import '../App.css'

const SignIn = () => {
  return (
    <>
        
  <div id='bg-signin'>
  <div id="form-ui">
    <form action="" method="post" id="form">
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Show Starter</div>
          <div id="welcome-line-2">Welcome Back, User</div>
        </div>
        <div id="input-area">
          <div className="form-inp">
            <input placeholder="Email Address" type="text"/>
          </div>
          <div className="form-inp">
            <input placeholder="Password" type="password"/>
          </div>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit">Login</button>
        </div>
        <div id="forgot-pass">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </form>
    </div>
    </div>
  

    </>
  )
}

export default SignIn