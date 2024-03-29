import React, {Fragment, useState, useEffect} from "react"
import {Link} from "react-router-dom"

import Loader from "../layout/loader.js"
import MetaData from "../layout/metaData.js"

import {useDispatch, useSelector} from "react-redux"
import { useAlert } from "react-alert"
import {login, clearErrors} from "../../actions/userActions.js"


const Login = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const alert = useAlert();
    const dispatch = useDispatch();

    const {isAuthenticated, error, loading} = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            alert.success("Prisijungimas pavyko!");
            history.push("/");
        }
    
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, isAuthenticated, error, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <metaData title={"Login"} />
                    <div className="row wrapper"> 
                    <div className="col-10 col-lg-5">
                    {/* <form className="shadow-lg" onSubmit={submitHandler}> */}
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                        <label htmlfor="email_field">Username</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
            
                        <div className="form-group">
                        <label htmlfor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        <Link to="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
            
                        <button
                        id="login_button"
                        type="submit"
                        className="btn btn-block py-3"
                        >
                        LOGIN
                        </button>

                        <Link to="/register"> 
                            <a href="#" className="float-right mt-3">New User?</a>
                        </Link>
                    </form>
                    </div>
                </div>
            </Fragment>
            )}
        </Fragment>
    )
}

export default Login