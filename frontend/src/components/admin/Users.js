import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

const Users = () => {
    return (
        <Fragment>
            <div className="col-12 col-md-10">
                <br></br>
                <div className="row pr-">
                    <Link className="btn btn-success" to="/dashboard">
                        Back
                    </Link>
                </div>
                <h1 className="my-4">User Editor</h1>
                <div className="row pr-4 mb-3">
                <div className="col-6">Vardenis</div>
                <div className="col-3">kietas4587</div>
                <div className="col-3">
                    <Link className="btn btn-primary mr-2" to="/me">
                        Edit
                    </Link>
                    <button className="btn btn-danger">
                    Delete
                    </button>
                </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Users