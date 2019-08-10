import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './Routers/AppRoute.component';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor} from './redux/store';

import './scss/main.scss';
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppRoute />
        </PersistGate>
        
    </Provider>
    , document.getElementById('root'));

