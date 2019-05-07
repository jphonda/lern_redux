import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


import {createStore} from "redux";
import {Provider} from "react-redux";
// import {globalReducer} from "./reducers/global";
import {reducers} from "./reducers";


const store = createStore(reducers);

store.dispatch({type:'upCount', payload: 1});
store.dispatch({type:'dowCount', payload: 1});
store.dispatch({type:'upCount', payload: 1});
store.dispatch({type:'upCount', payload: 1});
store.dispatch({type:'upCount', payload: 1});
store.dispatch({type:'upCount', payload: 1});

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
