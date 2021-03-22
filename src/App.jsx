import React from "react";
import "./App.scss";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="main">
					<input className="search" />
					<div className="flats">List of flats here!</div>
				</div>
				<div className="map"></div>
			</div>
		);
	}
}

export default App;
