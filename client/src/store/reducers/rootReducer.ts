import { combineReducers } from "redux";
import { users } from "./users"
import { token } from "./token"
import { message } from "./message"

export const rootReducer = combineReducers({
    users,
    token: token,
    message: message,
}) 