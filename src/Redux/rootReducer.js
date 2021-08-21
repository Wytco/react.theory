import {combineReducers} from 'redux'
import counter1 from "./Reducers/counter1";
import counter2 from "./Reducers/counter2";

export default combineReducers({
    counter1,counter2
})