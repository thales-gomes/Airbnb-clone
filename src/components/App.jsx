import React from "react";
import "./App.scss";
import Flat from "./Flat";
import Spinner from "./Spinner";
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_mapKey
	});

class App extends React.Component {
	state = {
		flats: [],
		selected: -1, // no selected flats
		center: [	2.349014, 48.864716 ]
	}

	componentDidMount() {
		const FLATS_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
		fetch(FLATS_URL)
		.then(response => response.json())
		.then(flats => this.setState({ flats: flats }))
	}

	selectFlat = (id) => {
		console.log(`selectFlat ${id}`);
		const { flats } = this.state;
		const flat = flats.find(flat => flat.id === id);
		this.setState({ selected: id, center: [flat.lng, flat.lat] });
	}

	renderDisplay(flats, selected) {
		let flatList = flats.map((flat, i) => {
			const { name, price, id, imageUrl } = flat
			return(
				<Flat
					onSelect={this.selectFlat}
					key={id}
					id={id}
					price={price}
					name={name}
					imageUrl={imageUrl}
					selected={selected === flat.id}/>
			)
		})
		if (flats.length === 0) { flatList = <Spinner /> }
		return flatList
	}

	render() {
		const { flats, selected, center } = this.state;

		return (
			<div className="app">
				<div className="main">
					<p>Selected flat: <code>{ selected}</code></p>
					<input className="search" />
					<div className="flats">
						{this.renderDisplay(flats, selected)}
					</div>
				</div>
				<div className="map">
				<Map
					zoom={[14]}
					center={center}
					containerStyle={{ height: "100vh", width: "100%" }}
					style="mapbox://styles/mapbox/streets-v8" />
				</div>
			</div>
		);
	}
}

export default App;
