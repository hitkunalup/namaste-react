import React, { useState, useEffect } from "react";
import { CDN_URL, FOOD_RATING_IMG } from "../../utils/constants";
import { restaurants } from "../../utils/data";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ restaurant }) => {
	return (
		<div key={restaurant.id} className='restaurant-card'>
			<div className='card-img'>
				<img src={CDN_URL + restaurant.cloudinaryImageId} />
			</div>
			<div className='card-body'>
				<div className='title'>{restaurant.name}</div>
				<div className='rating-container'>
					<span className='rating'>
						<img src={FOOD_RATING_IMG} />
						{restaurant.avgRating}
					</span>
					<span>{restaurant.sla.slaString}</span>
				</div>
				<div className='cuisine-container'>
					<span>{restaurant.cuisines?.join(", ")}</span>
					<span>{restaurant.areaName}</span>
				</div>
			</div>
		</div>
	);
};
const RestaurantCardContainer = ({ search, filters = null }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	const mapWithFilters = () => {
		if (!filters) return data;

		let filteredRestaurants = data;
		if (filters.rating) {
			filteredRestaurants = data.filter(
				(restaurant) => restaurant.info.avgRating > 4.4
			);
		}

		if (search) {
			filteredRestaurants = filteredRestaurants.filter((restaurant) =>
				restaurant.info.name.toLowerCase().includes(search.toLowerCase())
			);
		}

		return filteredRestaurants;
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5358272&lng=77.2600918&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const data = await response.json();
		setData(
			data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
		setLoading(false);
	};

	console.log("data", data);
	return (
		<div className='restaurant-card-container'>
			{loading ? (
				<Shimmer />
			) : (
				mapWithFilters(data).map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						restaurant={restaurant.info}
					/>
				))
			)}
		</div>
	);
};

export default RestaurantCardContainer;
