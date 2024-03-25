import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navBar";
import Jumbotron from "./Jumbotron";
import Footer from "./footer";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<>
		  <NavBar/>
		  <Jumbotron/>
		  <Card imageURL="https://picsum.photos/id/147/500/325" title="Ocean" description="Quiet ocean relaxing your mind ."/>
		  <Card imageURL="https://picsum.photos/id/237/500/325" title="Cute Puppy" description="A little puppy smiling."/>
		  <Card imageURL="https://picsum.photos/id/122/500/325" title="City " description="In the city of blinding lights"/>
		  <Card imageURL="https://picsum.photos/id/191/500/325" title="Highway" description="I'm on the highway to hell."/>
		  <Footer />

		</>
	);
};

export default Home;
