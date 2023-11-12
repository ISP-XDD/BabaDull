import React from 'react'
import {Link} from 'react-router-dom'

const RoleEdit = () => {
  return (
    <div>
      <br></br>
                <div className="row pr-">
                    <Link className="btn btn-warning" to="/dashboard/role">
                        Back
                    </Link>
                </div>
        <h1>Role editor</h1>
    </div>
  )
}

export default RoleEdit
