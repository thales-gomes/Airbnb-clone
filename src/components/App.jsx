import React from "react";
import "./App.scss";
import flatList from "./helpers/flatList";
import MapDisplay from './helpers/MapDisplay'
import flatMarkers from './helpers/flatMarkers';

class App extends React.Component {
	state = {
		flats: [],
		selected: -1, // no selected flats
		center: [2.349014, 48.864716], // Center of Paris
		filterText: ''
	}

	componentDidMount() {
		const FLATS_URL = "http://localhost:3000/flats.json"
		fetch(FLATS_URL)
		.then(response => response.json())
		.then(flats => this.setState({ flats: flats }))
	}

	selectFlat = (id) => {
		const { flats } = this.state;
		const flat = flats.find(flat => flat.id === id);
		const newCenter = [flat.lng, flat.lat];

		this.setState({ selected: id, center: newCenter });
	}

	filterFlats = (e) => {
		const text = e.target.value;
		this.setState({ filterText: text });
	}

	render() {
		const { flats, selected, center, filterText } = this.state;
		const filteredFlats = flats.filter(({name}) => {
			return name.match(new RegExp(filterText, 'i'));
		});

		return (
			<div className="app">
				<div className="main"> 
					<input className="search" placeholder="Type to find your flat!" onChange={this.filterFlats}/>
					<div className="flats">
						{flatList(filteredFlats, this.selectFlat, selected)} {/* Helper */}
					</div>
				</div>
				{MapDisplay(center, flatMarkers, filteredFlats, selected)} {/* Helper */}
			</div>
		);
	}
}

export default App;
