import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import Footer from "./components/Footer";
import "./index.scss";
import { Outlet } from "react-router-dom";

const FoodOrdering = () => {
	return (
		<div>
			<HeaderComponent />
			<Outlet />
			<Footer />
		</div>
	);
};

export default FoodOrdering;
