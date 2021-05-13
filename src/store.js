import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import notifReducer from "./reducers/notifReducer";
import  anecdoteReducer from "./reducers/anecReducer";
import thunk from "redux-thunk";


const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notif: notifReducer
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store
