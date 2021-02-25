import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import pageReducer from "./page-reducer";
import magazineReducer from "./magazine-reducer";
import generalReducer from "./general-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers( {
    page: pageReducer,
    magazinePage: magazineReducer,
    app: generalReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;