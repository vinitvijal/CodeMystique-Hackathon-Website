import React from "react";
import { Navbar, Footer } from "../../components";
import Header from "../Header";
import Eligibility from "../Eligibility";
import Timeline from "../Timeline";
import Gallery from "../Gallery";
import Sponsors from "../Sponsors";
import GoldSponsors from "../../data/Sponsors/GoldSponsers.json";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Sponsors type="Gold" sponsors={GoldSponsors} />
			<Footer />
		</>
	);
};

export default Home;
