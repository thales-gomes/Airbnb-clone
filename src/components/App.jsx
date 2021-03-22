import React from "react";
import "./App.scss";
import Flat from "./Flat";
import Spinner from "./Spinner";

class App extends React.Component {
	state = {
		flats: [],
	}

	componentDidMount() {
		fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
		.then(response => response.json())
		.then(flats => this.setState({ flats: flats }))	
	}

	renderDisplay(flats) {
		let flatList = flats.map((flat, i) => {
			const { name, price, id, imageUrl } = flat
			return(
			<Flat
				key={id}
				price={price}
				name={name}
				imageUrl={imageUrl} />
			)
		})
		if (flats.length === 0) { flatList = <Spinner /> }
		return flatList
	}

	render() {
		const { flats } = this.state;

		return (
			<div className="app">
				<div className="main">
					<input className="search" />
					<div className="flats">
						{this.renderDisplay(flats)}
					</div>
				</div>
				<div className="map"></div>
			</div>
		);
	}
}

export default App;
