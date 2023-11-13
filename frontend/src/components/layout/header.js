import React, { Fragment} from "react"
import {Route, Link} from "react-router-dom"
import '../../App.css'

const Header = () => {
  return (
    <Fragment>
        <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
        <Link to="/">
        <img src="/images/babadull_logo.png" alt="BabaDull logo" width="300" />
        </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">100</span>
        
        <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>

        <Link to="/upload" className="btn ml-4" id="upload_product_btn">Upload</Link>

        <div className="ml-4 dropdown d-inline">
          <Link to="#!" className="btn dropdown-toggle text-white" type="button" id="dropDownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <figure className="avatar avatar-nav">
                  <img src="/images/user-logo.png" alt="User"/>  
              </figure> 
          </Link>
          <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
              <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              <Link className="dropdown-item" to="/me">Profile</Link>
              <Link className="dropdown-item" to="/inventory">Inventory</Link> 
              <Link className="dropdown-item" to="/messages">Messages</Link>
              <Link className="dropdown-item text-danger" to="/">Logout</Link>  
          </div>
        </div>
      </div>
    </nav>
    </Fragment>
  )
}

export default Header