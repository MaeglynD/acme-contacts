import React from "react";
import { Link } from "react-router";

class ContactDetails extends React.Component {
  render() {
    return (
      <div className="contact-details">
        <h2>Contact details for: {this.props.data.name.split(" ")[0]}</h2>
        <dl>
          <dt>Full name</dt>
          <dd>{this.props.data.name}</dd>
          <dt>Phone number</dt>
          <dd>{this.props.data.phone}</dd>
        </dl>
        <Link to="/">Back to search</Link>
      </div>
    );
  }
}

export default ContactDetails;
