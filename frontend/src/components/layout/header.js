import React, { Fragment, useState} from "react"
import {Route, Link} from "react-router-dom"
import '../../App.css'

const Header = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
const SearchBar = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
};


  const handleAddTag = () => {
    if (inputValue.trim() !== '' && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };



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
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); // Prevents the default behavior of the Enter key (e.g., form submission)
                handleAddTag();
              }
            }}
          />
            <div className="input-group-append">
            <Link to="/search">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            {tags.map((tag) => (
              <span key={tag} className="badge badge-pill badge-warning mr-2">
                {tag}{' '}
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>


      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">100</span>
        
        <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>

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
              <Link className="dropdown-item" to="/messages">Messages</Link>
              <Link className="dropdown-item text-danger" to="/">Logout</Link>  
          </div>
        </div>
      </div>
      <div className="col-12 col-md-10 mt-1 mt-md-6 text-left text-md-left">
          {/* Links with orange text */}
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
          <Link to="/search" className="text-orange ml-3" style={{ color: 'orange' }}>digital storage</Link>
        </div>
    </nav>

    </Fragment>
  )
}

export default Header;