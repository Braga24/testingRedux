import { createStore,  applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from "./reducer";

 const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(Reducer, composedEnhancer);

export default store;
