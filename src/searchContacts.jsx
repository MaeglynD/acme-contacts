import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from "./searchBox";
import Results from "./results";
import LoadingOverlay from './loadingOverlay';
import { updateContacts, clearContacts } from "./redux/actions/contacts";

const SearchContacts = () => {
	const [str, setStr] = useState('');
	const dispatch = useDispatch();
	const contacts = useSelector((state) => state.contacts.contacts);
	const loading = useSelector((state) => state.contacts.loading);
	const error = useSelector((state) => state.contacts.error);

	useEffect(() => {
		// 
	}, [])

	// onSubmit, update everywhere
	const update = (str) => {
		// update state
		setStr(str);

		// needn't send an api call for no input
		if (!str) {
			return dispatch(clearContacts());
		}

		// update with api calls result
		dispatch(updateContacts(str));
	}

	// loading screen
	if (loading) {
		return <LoadingOverlay />
	}

	return (
		<section>
			<SearchBox
				onSubmit={update}
				currentSearch={str}
			/>
			<Results data={Array.isArray(contacts) ? contacts : error} />
		</section>
	);
}
export default SearchContacts;