import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card.jsx";
// import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import NavBar from "./NavBar.jsx";
import FooterBottom from "./FooterBottom.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar/>
			<Jumbotron/>
			<Card/>
			<FooterBottom/>

		</div>

	);
};

export default Home;
