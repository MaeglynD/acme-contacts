import React from "react";
import { render } from "@testing-library/react";
import ContactDetails from "./contactDetails";

describe("contactDetails", () => {
	it("prints details correctly", () => {
		// checks details are displayed correctly
		const testContact = {
			name: "John Doe",
			phone: "99999999",
		};

		const {
			container,
			getByText
		} = render(<ContactDetails data={testContact} />);

		const title = container.querySelector("h2").textContent;
		expect(title).toEqual("Contact details for: John");

		const name = getByText("John Doe");
		expect(name).toBeDefined()

		const phoneNumber = getByText("99999999");
		expect(phoneNumber).toBeDefined()
	});
});
