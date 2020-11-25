import React from "react";

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onSubmit = this.onSubmit.bind(this);
	}

	// focus input upon every load
	componentDidMount() {
		this.input.focus();
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.input && this.props.onSubmit) {
			this.props.onSubmit(this.input.value);
		}
	}

	render() {
		return (
			<form className="search-box" onSubmit={this.onSubmit}>
				<input
					type="text"
					placeholder="Search for contacts"
					ref={el => {
						this.input = el;
					}}
					defaultValue={this.props.currentSearch}
				/>
				<button type="submit" ref="submitBtn">
					Search
        </button>
			</form>
		);
	}
}

export default SearchBox;
