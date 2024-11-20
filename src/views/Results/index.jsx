import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IMG1 from "../../assets/dxa (2).png";
import IMG2 from "../../assets/dxa.png";
import IMG3 from "../../assets/dxa (3).png";
// import IMG4 from "../../assets/gallery/img4.webp";
// import IMG5 from "../../assets/gallery/img5.webp";
// import IMG6 from "../../assets/gallery/img6.webp";
// import IMG7 from "../../assets/gallery/img7.webp";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Results = () => {
	return (
		<div id="results" className="lg:px-20 py-10">
			<h1 className="text-4xl md:text-5xl text-center my-10 font-bold">
				Results
			</h1>
			<div>
				<Carousel responsive={responsive} className="lg:rounded-3xl">
					<img src={IMG1} alt="minihackthon2019" className="lg:pr-3" />
					<img src={IMG2} alt="minihackthon2019" className="lg:pr-3" />
					<img src={IMG3} alt="minihackthon2019" className="lg:pr-3" />
					{/* <img src={IMG4} alt="minihackthon2019" className="lg:pr-3" /> */}
					{/* <img src={IMG5} alt="minihackthon2019" className="lg:pr-3" />
					<img src={IMG6} alt="minihackthon2019" className="lg:pr-3" />
					<img src={IMG7} alt="minihackthon2019" className="lg:pr-3" /> */}
				</Carousel>
			</div>
		</div>
	);
};

export default Results;
