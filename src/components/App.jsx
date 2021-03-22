import React from "react";
import "./App.scss";
import Flat from "./Flat"

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="main">
					<input className="search" />
					<div className="flats">
					<Flat price={300} name="Great house"/>
					<Flat price={150} name="Modern flat"/>
					</div>
				</div>
				<div className="map"></div>
			</div>
		);
	}
}

export default App;
