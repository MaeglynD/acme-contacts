import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';

// creates a redux middleware and connects the sagas to the redux Store
const sagaMiddleware = createSagaMiddleware();
// store that holds the complete state tree of the app
const store = createStore(rootReducer, composeWithDevTools(
	applyMiddleware(sagaMiddleware),
))

sagaMiddleware.run(rootSaga);

export default store;