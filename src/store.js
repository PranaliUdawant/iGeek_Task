import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { UserReducer } from "./redux/reducer/Userreducer"

const rootReducer = combineReducers({
    User: UserReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
export default store