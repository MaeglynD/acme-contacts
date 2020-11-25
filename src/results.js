import React from "react";
import { Link } from "react-router";

class Results extends React.Component {
	render() {
		const data = this.props.data;
		let contents = 'Search the ACME database (3 letter minimum)';

		// 'data' can be an array of data, or an error string
		if (Array.isArray(data)) {
			contents = data.length ? (
				<ol>
					{data.map((item, i) => (
						<li key={i}>
							<Link to={"/contact/" + item.name}>{item.name}</Link>
						</li>
					))}
				</ol>
			) : (
					<p className="results__none-msg">Sorry, we can't find that</p>
				)

			// if not an array, null check, then log the error message
		} else if (!!data) {
			contents = <p className="results__none-msg">{data}</p>
		}

		// return encapsulated content in container
		return <div className="results">{contents}</div>;
	}
}

export default Results;
