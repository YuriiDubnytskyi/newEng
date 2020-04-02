import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import login from "./store/reducers/login"
import books from "./store/reducers/books";
import units from "./store/reducers/units";
import words from "./store/reducers/words";
import {IreduceLogin} from "./interfaces/IreduceLogin";
import {IreduceWords} from "./interfaces/IreduceWords";
import {IreduceUnits} from "./interfaces/IreduceUnits";
import {IreduceBooks} from "./interfaces/IreduceBooks";

const rootReducer = combineReducers<{login:IreduceLogin,books:IreduceBooks,units:IreduceUnits,words:IreduceWords}>({
    login:login,
    books:books,
    units:units,
    words:words
});
const logger = (store:any) => {
    return (next:any) => {
        return (action:any) => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
