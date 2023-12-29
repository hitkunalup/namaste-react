import React, { useState } from "react";
import RestaurantCardContainer from "./RestaurantCardContainer";

const BodyComponent = () => {
	const [value, setValue] = useState("");

	const onInputChange = (e) => setValue(e.target.value);

	return (
		<div className='body'>
			<div className='search-input'>
				<input
					onChange={onInputChange}
					value={value}
					placeholder='Search restaurant'
				/>
			</div>
			<RestaurantCardContainer />
		</div>
	);
};

export default BodyComponent;
