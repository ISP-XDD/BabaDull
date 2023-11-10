import React, {Fragment} from "react"
import {Link} from "react-router-dom"

const Register= () => {
    return (
        <Fragment>
           <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label for="email_field">Name</label>
            <input type="name" id="name_field" className="form-control" value="" />
          </div>

          <div className="form-group">
            <label for="email_field">Surname</label>
            <input type="name" id="surname_field" className="form-control" value="" />
          </div>
          <div className="form-group">
            <label for="email_field">Userame</label>
            <input type="name" id="username_field" className="form-control" value="" />
          </div>
            <div className="form-group">
              <label for="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
            <label for="email_field">Address</label>
            <input type="name" id="address_field" className="form-control" value="" />
          </div>
            <div className="form-group">
              <label for="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value=""
              />
            </div>
  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
            >
              REGISTER
            </button>
          </form>
		  </div>
    </div> 
        </Fragment>
    )
}


export default Register
