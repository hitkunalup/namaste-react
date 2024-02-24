import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CART_URL, LOGO_IMAGE_URL } from "../../utils/constants";

const HeaderComponent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();
	return (
		<div className='header'>
			<div className='logo'>
				<img className='logo-img' src={LOGO_IMAGE_URL} />
			</div>
			<div className='nav-items'>
				<ul className='nav-items-list'>
					<li onClick={() => navigate("/")}  className='nav-items-li'>Home</li>
					<li onClick={() => navigate("/about")} className='nav-items-li'>
						About
					</li>
					<li onClick={() => navigate("/contact")} className='nav-items-li'>Contact Us</li>
					<img onClick={() => navigate("/cart")} className='nav-items-li' src={CART_URL} />
					{isLoggedIn ? (
						<button
							onClick={() => setIsLoggedIn(false)}
							className='logout button'>
							Logout
						</button>
					) : (
						<button
							onClick={() => setIsLoggedIn(true)}
							className='login button'>
							Login
						</button>
					)}
				</ul>
			</div>
		</div>
	);
};

export default HeaderComponent;
