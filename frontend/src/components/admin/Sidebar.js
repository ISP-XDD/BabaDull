import React, {Fragment} from "react"
import {Route, Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar-wrapper">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                    <li>
                        <a href="#"><i className="fas fa-tachometer-alt"></i> Dashboard</a>
                    </li>
            
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fab fa-product-hunt"></i> Products</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                            <a href="#"><i className="fas fa-clipboard-list"></i> All</a>
                            </li>
            
                            <li>
                            <a href="#"><i className="fas fa-plus"></i> Create</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#"><i className="fas fa-shopping-basket"></i> Orders</a>
                    </li>

                    <li>
                        <Link to="/dashboard/users"><i className="fas fa-users"></i> Users</Link>
                    </li>

                    <li>
                        <Link to="/dashboard/role"><i className="fa-shopping-basket"></i> Roles</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Sidebar