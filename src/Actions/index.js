import UserAPI from "../API/UserAPI";

import {
    USER_LIST_FETCH_SUCCESS, USER_LIST_FETCH_LOADING,
    USER_LIST_FETCH_FAILURE, USER_DETAIL_FETCH_SUCCESS,
    USER_DETAIL_FETCH_LOADING, USER_DETAIL_FETCH_FAILURE,
    USER_LOGIN_SUCCESS, USER_LOGIN_LOADING, USER_LOGIN_FAILURE
}
    from "../Constants";



const userLogIn = (user) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN_LOADING })

        UserAPI.userLogIn(user)
            .then((response) => {
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: USER_LOGIN_FAILURE,
                    payload: "error"
                })
            })
    }
}

const getUserDetails = (id) => {
    return (dispatch) => {
        dispatch({ type: USER_DETAIL_FETCH_LOADING })
        UserAPI.getUserDetailsbyID(id)
            .then(
                (response) => {
                    dispatch({
                        type: USER_DETAIL_FETCH_SUCCESS,
                        payload: response.data
                    })
                }
            )
            .catch(
                (err) => {
                    dispatch({
                        type: USER_DETAIL_FETCH_FAILURE,
                        payload: err
                    })

                }
            )
    }
}

const getUsersListbyPage = (page) => {
    return (dispatch) => {
        dispatch({
            type: USER_LIST_FETCH_LOADING
        })
        UserAPI.getUserListByPage(page)
            .then(
                (response) => {
                    dispatch({
                        type: USER_LIST_FETCH_SUCCESS,
                        payload: response.data
                    })
                }
            )
            .catch((err) => {
                dispatch({
                    type: USER_LIST_FETCH_FAILURE,
                    payload: err
                })
            })
    }
}

export default { getUserDetails, userLogIn, getUsersListbyPage }