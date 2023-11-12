import React from 'react'
import {Link} from 'react-router-dom'

const RoleAdd = () => {
  return (
    <div>
        <br></br>
                <div className="row pr-">
                    <Link className="btn btn-warning" to="/dashboard/role">
                        Back
                    </Link>
                </div>
      <h1>Role add</h1>
    </div>
  )
}

export default RoleAdd
