import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../assets/logo/CodeMystique (7).png";
import { Link } from "react-router-dom";

const Countdown = () => {
	let currDate = "22-11-2024";
	currDate = currDate.split("-");
	let newDate = new Date(currDate[2], currDate[1] - 1, currDate[0]);
	let month = newDate.toLocaleString("en-us", { month: "long" });
	let date = newDate.getDate();

	return (
		<div className="flex justify-center flex-col md:flex-row px-3.5 mt-10 ">
			<div className="flex justify-center items-center md:p-10 ">
				<img
					src={Logo}
					alt="CodeMystique"
					className="min-w-0 max-w-lg md:max-w-lg"
				/>
			</div>

			<div className="justify-center items-center mt-0 md:mt-0 md:p-10 ml-20">
				<div>
					<CountdownTimer
						countdownTimestampMs={1732213800000	
						}
						month={month}
						date={date}
					/>
				</div>

				<div className="text-center mt-7">
					<a
						href="https://chat.whatsapp.com/DL8ixOTK49zFcIzD2Qfgl8"
						target="_blank"
						rel="noopener noreferrer"
						className=" bg-black text-white border border-black hover:bg-gray-100 hover:text-black rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500"
					>
							🚀 Join WhatsApp Group
					</a>
				</div>
				<div className="text-center mt-7">
					<Link
						to="https://unstop.com/hackathons/codemystique-20-coding-supreme-challenge-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1208554?lb=zcxFvRj&utm_medium=Share&utm_source=shortUrl"
						target="_blank"
						rel="noopener noreferrer"
						className=" bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500"
					>
						✍🏼 Register your team
					</Link>
				</div>
			</div>
			
		</div>
	);
};

export default Countdown;
