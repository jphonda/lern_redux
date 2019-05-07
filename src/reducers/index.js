import {combineReducers} from "redux";
import {globalReducer} from "./global";
import {userReducer} from "./user";

export const reducers = combineReducers({global: globalReducer,user: userReducer});