import React from "react";
import "./SearchBar.style.scss";
class SearchBar extends React.Component {
	constructor(props) {
		super();
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {
			term: ""
		};
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.setState({});
		this.props.onFormSubmit(this.state.term);
		//todo call callback from parent component
	}

	render() {
		return (
			<div className='ui segment search-bar'>
				<form onSubmit={this.onFormSubmit} className='ui form' action='#'>
					<div className='field'>
						<label htmlFor='searchbar'>Search</label>
						<input
							type='text'
							onChange={this.onInputChange}
							value={this.state.value}
							placeholder='search'
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
