import * as type from '../types';

const initialState = {
	contacts: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case type.UPDATE_CONTACTS_REQS:
			return {
				...state,
				loading: true,
				error: null
			};
		case type.UPDATE_CONTACTS_SUCCESS:
			return {
				...state,
				loading: false,
				contacts: action.contacts,
				error: null
			};
		case type.UPDATE_CONTACTS_FAILED:
			return {
				...state,
				contacts: null,
				loading: false,
				error: action.error
			};
		case type.CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				loading: false,
				error: null
			};

		default:
			return state;
	}
}