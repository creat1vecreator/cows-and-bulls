import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./Redux/rootReducer";
import thunk from 'redux-thunk'


const store = createStore(rootReducer);
const app = (

    <Provider store={store}>
        <App/>
    </Provider>
)
render(app,
    document.getElementById('root')
);

reportWebVitals();
