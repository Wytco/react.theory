import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Redux/rootReducer';
import reduxThunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// function loggerMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action);
//             console.log('Middleware result',result);
//             console.log('Middleware getState',store.getState());
//             return result;
//         }
//     }
// }

const loggerMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    console.log('Middleware result was', result);
    console.log('Middleware getState now', store.getState());
    return result;
};


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    loggerMiddleware,
    reduxThunk
)));

const aplication = (

    <BrowserRouter>
        <Provider store={store}>
            <App title={'I am from props!1'}/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(
    <React.StrictMode>
        {aplication}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
