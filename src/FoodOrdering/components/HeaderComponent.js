import React, { useState } from "react";
import { CART_URL, LOGO_IMAGE_URL } from "../../utils/constants";

const HeaderComponent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div className='header'>
			<div className='logo'>
				<img className='logo-img' src={LOGO_IMAGE_URL} />
			</div>
			<div className='nav-items'>
				<ul className='nav-items-list'>
					<li className='nav-items-li'>Home</li>
					<li className='nav-items-li'>About</li>
					<li className='nav-items-li'>Contact Us</li>
					<img className='nav-items-li' src={CART_URL} />
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
