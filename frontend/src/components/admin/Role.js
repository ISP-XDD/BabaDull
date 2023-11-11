import React,{Fragment} from 'react'
import {Route, Link} from 'react-router-dom'

const Role = () => {
    return (
            <div className="col-12 col-md-10">
              <h1 className="my-4">Role Editor</h1>
        
              <div className="row pr-4">
                <div className="col-xl-12 col-sm-12 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">Role Information<br /> <b>inf</b></div>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="row pr-4">
                  <div className="col-xl-4 col-sm-6 mb-3" >
                    <div className="card text-white bg-success o-hidden h-100">
                      <div className="card-body">
                        <div className="text-center card-font-size">Edit Role<br /> <b>inf</b></div>
                      </div>
                      <Link
                        className="card-footer text-white clearfix small z-1"
                        to={`/admin/edit-role/$`}
                      >
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                          <i className="fa fa-angle-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                
        
                {/* Add Role card */}
                <div className="col-xl-4 col-sm-6 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="text-center card-font-size">Add Role<br /> <b>inf</b></div>
                    </div>
                    <Link className="card-footer text-white clearfix small z-1" to="/admin/add-role">
                      <span className="float-left">Add New Role</span>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Role