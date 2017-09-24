var React = require('react');
var ReactDOM = require('react-dom');
var products = require('./products.js');


class Results extends React.Component {

	render() {

		return (
			<div className="results">
				<div className="in-stock">
					<h2><a href="#">Toothpaste</a></h2>
					<p>$2.99</p>
					<p>This is a product. This product is Toothpaste! 
					This is a product. This product is Toothpaste! 
					This is a product. This product is Toothpaste! 
					This is a product. This product is Toothpaste!</p>
				</div>
			</div>
		);

	}

}


class SearchBar extends React.Component {

	handleQuery(event) {
		this.props.onQuery(event.target.value);
	}

	render() {

		return(
			<div onChange={this.handleQuery.bind(this)} className="search-bar">
				<input placeholder="Search" />
			</div>
		);

	}

}


class Search extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			query: ''
		};
	}

	handleQuery(query) {
		this.setState({'query': query.toLowerCase().trim()});
	}

	render() {
		
		return (
			<div className="search">
				<SearchBar onQuery={this.handleQuery.bind(this)} />
				<Results />
			</div>
		);

	}

}

ReactDOM.render(<Search />, document.getElementById('app'));