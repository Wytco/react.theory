const redux = require('redux');
//Запуск
//node redux

const initialState = {
    counter: 0
};

//Reducer
const reducer = (state = initialState, action) => {

    if (action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }
    return state

};

//Store
//Место хранение данных
const store = redux.createStore(reducer);
//console.log('1 ', store.getState());

//Вызываем все методы
store.subscribe(() => {
    console.log('Subscribe ', store.getState());
});

//Actions
const addCounter = {
    type: 'ADD'
};

store.dispatch(addCounter);
// console.log('2 ', store.getState());

store.dispatch({type: 'SUB'});
// console.log('3 ', store.getState());

store.dispatch({type: 'ADD_NUMBER', value: 10});
// console.log('4 ', store.getState());