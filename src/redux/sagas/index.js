import { all } from 'redux-saga/effects';
import contactSaga from './contactSaga';

export default function* rootSaga() {
	yield all([
		contactSaga()
	])
}