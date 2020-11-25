import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

function getContacts(term) {
	return axios.get('/contacts', {
		params: { term }
	})
		.then(({ data }) => {
			return data
		})
		.catch((err) => {
			const errorText = err.response?.data?.error;
			if (errorText) return errorText;
			return err.message;
		});
}

function* fetchContacts(action) {
	const { payload } = action;
	try {
		const result = yield call(getContacts, payload);

		if (Array.isArray(result)) {
			yield put({ type: 'UPDATE_CONTACTS_SUCCESS', contacts: result });
		} else {
			yield put({ type: 'UPDATE_CONTACTS_FAILED', error: result });
		}
	} catch (error) {
		yield put({ type: 'UPDATE_CONTACTS_FAILED', error });
	}
}

function* contactSaga() {
	yield takeEvery('UPDATE_CONTACTS_REQS', fetchContacts);
}

export default contactSaga;