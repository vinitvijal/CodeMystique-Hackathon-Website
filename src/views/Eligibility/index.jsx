import React from "react";
import { Link } from "react-router-dom";

const Eligibility = () => {
	return (
		<div id="eligibility">
			<div className="mb-14">
				<div>
					<div className="flex justify-center p-6 rounded-lg">
						<div className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">
							Who Can Participate ?
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="text-center text-neutral-500 lg:text-xl">
					CodeMystique 2.0 welcomes participants from all walks of coding life, <br />
					whether you're a seasoned developer or just beginning your coding journey. <br />
					From tech enthusiasts to aspiring programmers, <br /> this event is designed to challenge and inspire individuals of all skill levels.
					</div>
				</div>

				<div className="text-center mt-2">
					<div className="pt-2 text-xl font-medium">
						🎓 All 1st Year Students
					</div>
					<div className="pt-2 text-xl font-medium">
						🎓 All 2nd Year Students
					</div>
					<div className="pt-2 text-xl font-medium">
						🎓 All College Students
					</div>
				</div>

				<div className="flex justify-center">
					<button className="mt-4 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500">
						<Link
							to="/instructions"
							rel="noopener noreferrer"
						>
							Get Full Instructions{" "}
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Eligibility;
