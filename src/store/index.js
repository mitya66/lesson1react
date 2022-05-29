import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import chatReducer from "./chats/reducer";
import messageReducer from "./messages/reducer";
import  profileReducer from './profile/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import mySaga from "./sagas";
import storage from 'redux-persist/lib/storage';
import gistsReducer from './gists/reducer';


const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage
};


const reducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    message: messageReducer,
    gists: gistsReducer
})

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, composeEnhancer (applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

sagaMiddleware.run(mySaga)

export default persistor;

