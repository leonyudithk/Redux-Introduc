import { combineReducers, createStore } from "redux";
import { reducersCounter } from "../reducers/reducersCounter";
import { reducersProducto } from "../reducers/reducersProducto";

const reducers = combineReducers({
    counter: reducersCounter,
    producto: reducersProducto

})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)