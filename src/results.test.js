import React from "react";
import { render } from "@testing-library/react";
import Results from "./results";

describe("results", () => {
	it("displays a list of linked names", () => {
		const data = ['jon', 'sam', 'mitchell'].map((x) => ({ name: x }));

		const { container } = render(<Results data={data} />);

		const urls = container.querySelectorAll("a");

		expect(urls.length).toEqual(3);

		expect(urls[0].textContent).toEqual("jon");
	});
});
