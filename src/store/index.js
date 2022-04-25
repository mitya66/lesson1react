import { createStore, combineReducers } from "redux";
import chatReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import  profileReducer from './profile/reducer';

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    message: messageReducer
})


const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;