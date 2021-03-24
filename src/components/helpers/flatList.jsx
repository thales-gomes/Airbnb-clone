import React from "react";
import Flat from "../Flat";
import Spinner from "../Spinner";

const	flatList = (flats, selectFlat, selected) => {
		let flatList = flats.map(({ name, price, id, image_url }) => {
			return(
				<Flat
					onSelect={selectFlat}
					key={id}
					id={id}
					price={price}
					name={name}
					imageUrl={image_url}
					selected={selected === id}/>
			)
		})
		if (flats.length === 0) { flatList = <Spinner /> }
		return flatList
}

export default flatList