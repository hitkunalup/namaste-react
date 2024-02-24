import React from "react";
import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
import FoodOrdering from "./FoodOrdering";
import About from "./FoodOrdering/components/About";
import BodyComponent from "./FoodOrdering/components/BodyComponent";
import CartComponent from "./FoodOrdering/components/Cart";
import Contact from "./FoodOrdering/components/Contact";
import Error from "./FoodOrdering/components/Error";
import SingleRestaurant from "./FoodOrdering/components/SingleRestaurant";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <FoodOrdering />,
		children: [
			{
				path: "/",
				element: <BodyComponent />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <CartComponent />,
			},
			{
				path: "/restaurant/:id",
				element: <SingleRestaurant />,
				errorElement: <Error />,
			},
		],
		errorElement: <Error />,
	},
]);

const RoutesComponentWrapper = () => {
	return <RouterProvider router={appRouter} />;
};
export default RoutesComponentWrapper;
