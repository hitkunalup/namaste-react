import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Text from "../../../commons/Text/index";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./index.scss";
import { FOOD_RATING_IMG } from "../../../utils/constants";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const groupAutoQADataByKey = (data = [], key) => {
	if (!data?.length) return null;

	let transformedData = data.reduce((accumulator, currentValue) => {
		const checkKey = currentValue.card.info?.[key];
		if (checkKey in accumulator) {
			accumulator[checkKey].push(currentValue);
		} else {
			accumulator = {
				...accumulator,
				[checkKey]: [
					{
						...currentValue,
					},
				],
			};
		}

		return accumulator;
	}, {});

	return transformedData;
};

const SingleRestaurant = () => {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const fetchData = async () => {
		const response = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${id}&lat=28.5358272&lng=77.2600918&catalog_qa=undefined&submitAction=ENTER`
		);
		const res = await response.json();
		setData(res.data);
		setLoading(false);
	};

	const mappedMenuData = groupAutoQADataByKey(
		data?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
			.itemCards,
		"category"
	);

	console.log("mappedMenuData", mappedMenuData);

	useEffect(() => {
		if (id) {
			fetchData();
		}
	}, [id]);

	return (
		<div className='d-flex jc-center restaurant-menu'>
			{loading ? (
				<div className='d-flex w-100'>Loading...</div>
			) : (
				<div className='restaurant-menu--parent w-100'>
					<div className='d-flex flex-column w-100 restaurant-menu--wrapper pb-16 row-gap-8'>
						<h1 className='d-flex'>{data.cards[2].card.card.info.name}</h1>
						<div className='d-flex flex-column w-100 row-gap-4'>
							<div className='d-flex w-100 jc-between ai-center'>
								<div className='d-flex flex-column'>
									<Text className='neutral-8'>
										{data.cards[2].card.card.info.cuisines.join(", ")}
									</Text>
									<Text className='neutral-8 d-flex col-gap-4'>
										{data.cards[2].card.card.info.areaName},
										<span>
											{data.cards[2].card.card.info.sla.lastMileTravelString}
										</span>
									</Text>
								</div>
								<div className='d-flex flex-column p-2 rounded-8 jc-center restaurant-menu--wrapper--rating'>
									<div className='d-flex jc-center ai-center restaurant-menu--wrapper---rating-div pb-2 col-gap-8'>
										<img
											className='restaurant-menu--wrapper---rating-img'
											src={FOOD_RATING_IMG}
										/>
										<Text className='d-flex jc-center bold'>
											{data.cards[2].card.card.info.avgRatingString}
										</Text>
									</div>
									<Text className='neutral-8 d-flex jc-center pt-2'>
										{data.cards[2].card.card.info.totalRatingsString}
									</Text>
								</div>
							</div>
							<div className='d-flex col-gap-8 ai-center'>
								<DirectionsBikeIcon className='delivery-rider-svg' />
								<Text className='neutral-8'>
									{data.cards[2].card.card.info.feeDetails.message}
								</Text>
							</div>
						</div>
					</div>
					<div className='py-16 d-flex restaurant-menu--wrapper--1 flex-column row-gap-16'>
						<div className='d-flex col-gap-24'>
							<div className='d-flex col-gap-4 ai-center'>
								<AccessTimeIcon />
								<Text className='large bold'>
									{data.cards[2].card.card.info.sla.slaString}
								</Text>
							</div>
							<div className='d-flex col-gap-4 ai-center'>
								<CurrencyRupeeIcon />
								<Text className='large bold'>
									{data.cards[2].card.card.info.costForTwoMessage}
								</Text>
							</div>
						</div>
						<div className='d-flex col-gap-8 ai-center'>
							<Text className='bold xl'>Veg Only</Text>
							<Switch {...label} color='success' />
						</div>
					</div>
					<div className='menu d-flex flex-column w-100'>
						{Object.entries(mappedMenuData).map(([key, value]) => (
							<div
								className='py-16 menu--item d-flex flex-column row-gap-16'
								key={key}>
								<Text className='xl bold'>
									{key} ({value?.length})
								</Text>
								{(value as []).map(() => (
									<div className="menu--item--render">

									</div>
								))}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleRestaurant;
