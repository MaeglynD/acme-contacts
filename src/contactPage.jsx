import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import ContactDetails from "./contactDetails";

const ContactPage = ({ params }) => {
	const [data, setData] = useState({ name: 'unknown', phone: 'unknown' });
	const contacts = useSelector((state) => state.contacts.contacts);

	useEffect(() => {
		const { contact } = params;

		if (!!contact) {
			const found = contacts.find((x) => x.name === contact);
			if (found) setData(found);
		}
	}, [])

	return (
		<ContactDetails data={data} />
	)
}

export default ContactPage;
