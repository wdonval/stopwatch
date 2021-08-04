import React, { useEffect, useRef } from "react";
import { Play, Pause, ArrowCounterClockwise, FlagBanner } from "phosphor-react";

export default function TimerControl({ started, reset, toggle, save }) {
	const startButton = useRef(null);
	const resetButton = useRef(null);

	useEffect(() => {
		document.addEventListener("keyup", (event) => handleInput(event));

		return function cleanup() {
			document.removeEventListener("keyup", (event) => handleInput(event));
		};
	}, []);

	const handleInput = (event) => {
		if (event.code === "Enter" || event.code === "Space") {
			startButton.current.click();
		} else if (event.code === "Backspace" || event.code === "Delete") {
			resetButton.current.click();
		}
	};

	return (
		<div className="flex items-center justify-center gap-8">
			<button
				ref={resetButton}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-white text-gray-900 h-16 w-16 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
				onClick={reset}
			>
				<ArrowCounterClockwise size={26} />
			</button>
			<button
				ref={startButton}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-primary text-white h-16 w-16 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
				onClick={toggle}
			>
				{!started && <Play size={26} />}
				{started && <Pause size={26} />}
			</button>
			<button
				disabled={!started}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-white text-gray-900 h-16 w-16 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 disabled:active:scale-100 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-default"
				onClick={save}
			>
				<FlagBanner size={26} />
			</button>
		</div>
	);
}
