import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './Routers/AppRoute.component';
import { Provider } from 'react-redux';
import store from './redux/store';

import './scss/main.scss';
ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>
    , document.getElementById('root'));

