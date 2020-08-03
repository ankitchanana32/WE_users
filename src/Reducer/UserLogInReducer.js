import {
    USER_LOGIN_SUCCESS, USER_LOGIN_LOADING, USER_LOGIN_FAILURE
} from "../Constants";

const initialState = {};

const UserLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token)
            return ({ ...state, error: "", token: action.payload })
        case USER_LOGIN_LOADING:
            return ({ ...state, error: "" })
        case USER_LOGIN_FAILURE:
            return ({ ...state, error: "Please enter valid Credentials !!!s"})
        default:
            return ({ ...state, error: "" })
    }
}

export default UserLoginReducer;
