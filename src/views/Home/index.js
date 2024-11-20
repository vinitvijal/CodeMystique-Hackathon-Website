import React from "react";
import { Navbar, Footer } from "../../components";
import Header from "../Header";
import Eligibility from "../Eligibility";
import Timeline from "../Timeline";
import Gallery from "../Gallery";
import Sponsors from "../Sponsors";
import GoldSponsors from "../../data/Sponsors/GoldSponsers.json";
import Results from "../Results";
// import ProductSponsors from "../../data/Sponsors/ProductSponsers.json";


const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Results />
			<Sponsors type="Gold" sponsors={GoldSponsors} />
			{/* <Sponsors type="Product" sponsors={ProductSponsors} /> */}
			<Footer />
		</>
	);
};

export default Home;
