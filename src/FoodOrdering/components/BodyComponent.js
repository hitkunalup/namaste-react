import React, { useState, useMemo } from "react";
import RestaurantCardContainer from "./RestaurantCardContainer";

const BodyComponent = () => {
	const [value, setValue] = useState("");
	const [checked, setChecked] = useState(false);

	const onInputChange = (e) => setValue(e.target.value);

	const onBestRatingFilter = (checked) => setChecked(checked);

	const filters = useMemo(() => {
		return {
			rating: checked,
		};
	}, [checked]);
	return (
		<div className='body'>
			<div className='search-input'>
				<input
					onChange={onInputChange}
					value={value}
					placeholder='Search restaurant'
				/>
				<div className='top-rating-restaurant'>
					<input
						onChange={(e) => onBestRatingFilter(e.target.checked)}
						checked={checked}
						id='rating-filter'
						// placeholder='Search restaurant'
						type='checkbox'
					/>
					<label className="label" htmlFor='rating-filter'>Top rated restaurants</label>
				</div>
			</div>
			<RestaurantCardContainer search={value} filters={filters} />
		</div>
	);
};

export default BodyComponent;
