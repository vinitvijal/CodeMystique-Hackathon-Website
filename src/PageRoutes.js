import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views";

import Instructions from "./views/Instructions";

const PageRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/instructions" element={<Instructions />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PageRoutes;
