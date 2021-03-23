import React from "react";
import Flat from "../Flat";
import Spinner from "../Spinner";

const	flatList = (flats, selectFlat, selected) => {
		let flatList = flats.map(flat => {
			const { name, price, id, imageUrl } = flat
			return(
				<Flat
					onSelect={selectFlat}
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

export default flatList