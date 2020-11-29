import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/index.js';
import rootSaga from '../redux/sagas/index';

let store;

// recreate the store each test
const restoreStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);
}

// render a component with said state attached
const renderWithProvider = (Component, params = {}) => {
	return render(
		<Provider store={store}>
			<Component params={params} />
		</Provider>
	)
};

export { restoreStore, renderWithProvider }