import React from "react";
import { restaurants } from "../data";

const RestaurantCard = ({ restaurant }) => {
	return (
		<div key={restaurant.id} className='restaurant-card'>
			<div className='card-img'>
				<img src={restaurant.img_src} />
			</div>
			<div className='card-body'>
				<div className='title'>{restaurant.title}</div>
				<div className='rating-container'>
					<span className='rating'>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKPCcyWbm_TwrqOPqcRX_fwVfabcsKdoJ5q4zp20N2Gr1Zk49oANUIbpEh2S-l-X5Y-Q&usqp=CAU' />
						{restaurant.rating}
					</span>
					{/* <span>.</span> */}
					<span>{restaurant.delivery_time} mins</span>
				</div>
				<div className='cuisine-container'>
					<span>{restaurant.cuisine.join(", ")}</span>
					<span>{restaurant.address}</span>
				</div>
			</div>
		</div>
	);
};
const RestaurantCardContainer = () => {
	return (
		<div className='restaurant-card-container'>
			{restaurants.map((restaurant) => (
				<RestaurantCard key={restaurant.id} restaurant={restaurant} />
			))}
		</div>
	);
};

export default RestaurantCardContainer;
