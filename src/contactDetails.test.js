import React from "react";
import { render } from "@testing-library/react";
import ContactDetails from "./contactDetails";

describe("contactDetails", () => {
  it("prints first name correctly", () => {
    const testContact = {
      name: "John Doe",
      phone: "99999999",
    };
    const { container } = render(<ContactDetails data={testContact} />);

    const title = container.querySelector("h2").textContent;

    expect(title).toEqual("Contact details for: John");
  });
});
