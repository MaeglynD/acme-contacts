import * as type from '../types';

// pass a string, recieve all relevant contacts
export function updateContacts(contacts) {
	return {
		type: type.UPDATE_CONTACTS_REQS,
		payload: contacts,
	}
}

// clear contacts
export function clearContacts() {
	return {
		type: type.CLEAR_CONTACTS
	}
}