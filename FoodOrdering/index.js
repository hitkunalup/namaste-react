import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import Footer from "./components/Footer";
import "./index.scss";

const FoodOrdering = () => {
	return (
		<div>
			<HeaderComponent />
			<BodyComponent />
			<Footer />
		</div>
	);
};

export default FoodOrdering;
