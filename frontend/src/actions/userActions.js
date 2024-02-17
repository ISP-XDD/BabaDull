import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

//Login
export const login = (el_pastas, slaptazodis) => async (dispatch) => {
    try{
        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log('Login request data:', { el_pastas, slaptazodis }); // Log the request data
        const { data } = await axios.post('/api/v1/login', { el_pastas, slaptazodis }, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        console.error('Login error:', error);

        // Log the entire error object
        console.log('Full error object:', error);

        dispatch({
            type: LOGIN_FAIL,
            payload: error.response ? error.response.data.message : 'An unexpected error occurred',
        })
    }
}

//Register user
export const register = (userData) => async (dispatch) => {
    try{
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        
        const { data } = await axios.post('/api/v1/register', userData, config)
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response ? error.response.data.message : 'An unexpected error occurred',
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}