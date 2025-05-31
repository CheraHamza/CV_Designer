import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import Navbar from "./Navbar.jsx";
import Sidepanel from "./Sidepanel.jsx";
import Previewsection from "./Previewsection.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Navbar></Navbar>
		<Sidepanel></Sidepanel>
		<Previewsection></Previewsection>
	</StrictMode>
);
