import {ADD, SUB, ADD_NUMBER, ADD_NUMBER_2} from './ActionTypes';

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload: number
    }
}

export function addNumber2(number) {
    return {
        type: ADD_NUMBER_2,
        payload: number
    }
}

export function AsyncAdd(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNumber(number))
        },3000)
    }
}