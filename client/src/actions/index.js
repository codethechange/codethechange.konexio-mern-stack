import axios from 'axios';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    TRY_CONNECT,
    GET_USER_PROFILE,
    GET_USER_MATCHES,
    UPDATE_USER_PROFILE_GOOD,
    UPDATE_USER_PROFILE_FAIL
} from './types';
const ROOT_URL = process.env.API_URI || 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('auth_jwt_token')) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function signUserIn(data) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signin`, data)
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('auth_jwt_token', res.data.token);
                window.location = '/codethechange.konexio-mern-stack/#account';
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Server Error, try later.'})
            });
    }
}

export function signUserUp(userObj) {
    return function (dispatch) {
        // Submit email/password to server
        axios
            .post(`/signup`, userObj)
            .then(res => {
                dispatch({type: AUTH_USER})
                localStorage.setItem('auth_jwt_token', res.data.token);
                window.location = '/codethechange.konexio-mern-stack/#account';
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Server Error, try later.'})
            });
    }
}

export function signUserOut() {
    return function (dispatch) {
        dispatch({type: UNAUTH_USER})
        localStorage.removeItem('auth_jwt_token');
    }
}

export function tryConnect() {
    return function (dispatch) {
        axios
            .get(`/api`)
            .then(res => {
                dispatch({
                    type: TRY_CONNECT,
                    payload: res.data
                })
            })
            .catch(error => console.log(error.response.data));
    }
}
export function getUserProfile() {
    return function (dispatch) {
        axios
            .get(`/api/userProfile`)
            .then(res => {
                dispatch({
                    type: GET_USER_PROFILE,
                    payload: res.data
                })
            })
            .catch(error => console.log(error.response.data));
    }
}

export function getUserMatches() {
    return function (dispatch) {
        axios
            .get(`/api/userProfile/match`)
            .then(res => {
                dispatch({
                    type: GET_USER_MATCHES,
                    payload: res.data
                })
            })
            .catch(error => console.log(error.response.data));
    }
}

export function updateUserProfile(profile) {
    return function (dispatch) {
        axios
            .post(`/api/userProfile`, profile)
            .then(() => {
                dispatch({
                    type: UPDATE_USER_PROFILE_GOOD
                })
                window.location.reload(true);
            })
            .catch(error => {
                console.log(error.response.data)
                if(error.response.data == "Incorrect Password") {
                    dispatch({
                        type: UPDATE_USER_PROFILE_FAIL,
                        payload: "Incorrect Password. Please try it again."
                    })
                }
            });
    }
}

export function updateUserMatch(profile) {
    return function (dispatch) {
        axios
            .post(`/api/userProfile/match`, profile)
            .then(() => {
                dispatch({
                    type: UPDATE_USER_PROFILE_GOOD
                })
                window.location = '/codethechange.konexio-mern-stack/#myConnections';
            })
            .catch(error => {
                console.log(error.response.data)
            });
    }
}
