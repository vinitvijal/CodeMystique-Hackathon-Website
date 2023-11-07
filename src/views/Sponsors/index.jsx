import React from "react";
import sscbs from "../../assets/sponsors/sscbs.png";
// import acm from '../../assets/sponsors/acm.png';
// import gdsc from '../../assets/sponsors/gdsc-social.png';
const Sponsers = (props) => {
	return (
		<div id="sponsers" className="lg:px-20">
			<h1 className="text-4xl md:text-5xl text-center my-10 font-bold">
				{props.type} Sponsor
			</h1>
			<div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
				{props.sponsors.data.map((sponsor) => (
					<div className="flex justify-center my-5">
						<a href={sponsor.companyUrl} className="mb-4 sm:mb-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
							<img
								src={sscbs}
								className="h-40"
								alt={sponsor.companyName}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sponsers;
