import {
    USER_DETAIL_FETCH_SUCCESS,
    USER_DETAIL_FETCH_LOADING, USER_DETAIL_FETCH_FAILURE
} from "../Constants";

const initialState = {};

const UserDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DETAIL_FETCH_SUCCESS:
            return ({ ...state, userDetails: action.payload })
        case USER_DETAIL_FETCH_LOADING:
            return ({ ...state })
        case USER_DETAIL_FETCH_FAILURE:
            return ({ ...state, error: " Please enter valid credentials !!!" })
        default:
            return ({ ...state })
    }
}

export default UserDetailsReducer;
