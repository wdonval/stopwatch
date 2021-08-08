import React, { useEffect, useState } from "react";
import Timer from "@/components/Stopwatch/Timer";
import Navbar from "@/components/Navbar";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { Timer as TimerIcon, HourglassLow } from "phosphor-react";
import Toggle from "@/components/Toggle";
import Tooltip from "@/components/Tooltip";

const routes = [
	{ path: "/", label: "Chronomètre", component: <Timer />, icon: <TimerIcon size={24} /> },
	{ path: "/countdown", label: "Minuteur", component: <div>Test</div>, icon: <HourglassLow size={24} /> },
];

function App() {
	const [darkTheme, setDarkTheme] = useState(false);

	const toggleDarkTheme = (value) => {
		setDarkTheme(value);
		if (value) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.add("bg-gray-900");
			document.documentElement.classList.remove("bg-gray-50");
		} else {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.remove("bg-gray-900");
			document.documentElement.classList.add("bg-gray-50");
		}
	};

	const manuallyToggleDarkTheme = (value) => {
		localStorage.setItem("darkTheme", value);
		toggleDarkTheme(value);
	};

	useEffect(() => {
		if (localStorage.getItem("darkTheme")) {
			if (localStorage.getItem("darkTheme") === "true") {
				toggleDarkTheme(true);
			} else {
				toggleDarkTheme(false);
			}
		} else {
			if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
				toggleDarkTheme(true);
			} else {
				toggleDarkTheme(false);
			}
		}

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
			toggleDarkTheme(e.matches);
		});
	}, []);

	return (
		<div className="mx-auto p-2 text-gray-900 dark:text-gray-100">
			<Tooltip placement="bottom-end" content={`Thème ${darkTheme ? "sombre" : "clair"}`}>
				<div className="inline-flex absolute left-6 top-6 -mt-0.5">
					<Toggle active={darkTheme} setActive={manuallyToggleDarkTheme} />
				</div>
			</Tooltip>
			<Router>
				<Navbar routes={routes} />
				<Switch>
					{routes.map((route, index) => (
						<Route exact key={`route-${index}`} path={route.path}>
							{route.component}
						</Route>
					))}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
