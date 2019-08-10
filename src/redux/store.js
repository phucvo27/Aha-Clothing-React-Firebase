import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';


const middlewares = [logger];

// also do like this :   applyMiddleware(logger);
export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // ...middleware -> will spread all the item into the seperate invidual item 

// so if : middlewares = [a, b] -> applyMiddleware(...middlewares) <=> applyMiddleware(a, b);

export const persistor = persistStore(store);

//export { store, persistor};
