import { combineReducers } from "redux";

import UserDetailsReducer from "./UserDetailsReducer";
import UserListReducer from "./UserListReducer";
import UserLoginReducer from "./UserLogInReducer";


const rootReducer = combineReducers({
    UserDetailsReducer,
    UserListReducer,
    UserLoginReducer,
})

export default rootReducer;