import {
    USER_LIST_FETCH_SUCCESS, USER_LIST_FETCH_LOADING, USER_LIST_FETCH_FAILURE
} from "../Constants";

const initialState = {};

const UserListReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST_FETCH_SUCCESS:
            return ({ ...state, users : action.payload })
        case USER_LIST_FETCH_LOADING:
            return ({ ...state })
        case USER_LIST_FETCH_FAILURE:
            return ({ ...state })
        default:
            return ({ ...state })
    }
}

export default UserListReducer;
