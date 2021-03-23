import React from "react";
import "./App.scss";
import Flat from "./Flat";
import Spinner from "./Spinner";
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import FlatMarker from "./FlatMarker";


const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_mapKey
	});

class App extends React.Component {
	state = {
		flats: [],
		selected: -1, // no selected flats
		center: [2.349014, 48.864716],
		filterText: ''
	}

	componentDidMount() {
		const FLATS_URL = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
		fetch(FLATS_URL)
		.then(response => response.json())
		.then(flats => this.setState({ flats: flats }))
	}

	selectFlat = (id) => {
		const { flats } = this.state;
		const flat = flats.find(flat => flat.id === id);
		const newCenter = [flat.lng, flat.lat]

		this.setState({ selected: id, center: newCenter });
	}

	flatList(flats, selected) {
		let flatList = flats.map(flat => {
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

	flatMarkers(flats, selected) {
		const markers = flats.map(flat => {
			const { price, id } = flat
			return (
				<Marker coordinates={[flat.lng, flat.lat]}>
					<FlatMarker
						key={id}
						price={price}
						selected={selected === flat.id} />
				</Marker>
			)}
		)
		return markers
	}

	filterFlats = (e) => {
		const text = e.target.value;
		this.setState({filterText: text})
	}

	render() {
		const { flats, selected, center, filterText } = this.state;
		const filteredFlats = flats.filter(flat => {
			return flat.name.match(new RegExp(filterText, 'i'));
			});

		return (
			<div className="app">
				<div className="main">
					<p>Selected flat: <code>{selected}</code></p>
					<input className="search" onChange={this.filterFlats}/>
					<div className="flats">
						{this.flatList(filteredFlats, selected)}
					</div>
				</div>
				<div className="map">
				<Map
					zoom={[14]}
					center={center}
					containerStyle={{ height: "100vh", width: "100%" }}
					style="mapbox://styles/mapbox/streets-v8">
						{this.flatMarkers(filteredFlats, selected)}
				</Map>
				</div>
			</div>
		);
	}
}

export default App;
