import React from "react";
import { Navbar, Footer } from "../../components";
import Header from "../Header";
import Eligibility from "../Eligibility";
import Timeline from "../Timeline";
import Gallery from "../Gallery";
import Sponsors from "../Sponsors";
import GoldSponsors from "../../data/Sponsors/GoldSponsers.json";
import ProductSponsors from "../../data/Sponsors/ProductSponsers.json";
import PopModel from "../Model";

const Home = () => {
	return (
		<>
			<PopModel />
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Sponsors type="Gold" sponsors={GoldSponsors} />
			<Sponsors type="Product" sponsors={ProductSponsors} />
			<Footer />
		</>
	);
};

export default Home;
