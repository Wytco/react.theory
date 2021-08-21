import {ADD_NUMBER_2} from '../ActionsRedux/ActionTypes';

const initialState = {
    counter: 200
};

export default function counter2(state = initialState, action) {

    switch(action.type) {
        case ADD_NUMBER_2:
            return {
                counter: state.counter + action.payload
            };
        default:
            return state
    }
}