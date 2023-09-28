import React from 'react'
import '../App.css'

const SignUp = () => {
  return (
    <>
        
  <div id='bg-signin'>
  <div id="form-ui">
    <form action="" method="post" id="form">
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Show Starter</div>
          <div id="welcome-line-2">Signup now and get full access to our app.</div>
        </div>
        <div id="input-area">
          <div className="form-inp">
            <input placeholder="Name" type="text"/>
          </div>
          <div className="form-inp">
            <input placeholder="Email Address" type="email"/>
          </div>
          <div className="form-inp">
            <input placeholder="Password" type="password"/>
          </div>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button" type="submit">Confirm</button>
        </div>
      </div>
    </form>
    </div>
    </div>
  

    </>
  )
}

export default SignUp