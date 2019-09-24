import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}
// also do like this :   applyMiddleware(logger);
export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // ...middleware -> will spread all the item into the seperate invidual item 

sagaMiddleware.run(rootSaga);
// so if : middlewares = [a, b] -> applyMiddleware(...middlewares) <=> applyMiddleware(a, b);

export const persistor = persistStore(store);

//export { store, persistor};
