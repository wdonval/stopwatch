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
		if (event.target === document.body) {
			if (event.code === "Enter" || event.code === "Space") {
				startButton.current.click();
			} else if (event.code === "Backspace" || event.code === "Delete") {
				resetButton.current.click();
			}
		}
	};

	return (
		<div className="flex items-center justify-center xs:gap-8 gap-4">
			<button
				ref={resetButton}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 h-16 w-16 transform active:scale-95 transition-all duration-150 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
				onClick={reset}
			>
				<ArrowCounterClockwise size={26} />
			</button>
			<button
				ref={startButton}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-primary text-white dark:text-gray-100 h-16 w-16 transform active:scale-95 transition-all duration-150 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
				onClick={toggle}
			>
				{!started && <Play size={26} />}
				{started && <Pause size={26} />}
			</button>
			<button
				disabled={!started}
				className="flex-shrink-0 rounded-2xl shadow flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 h-16 w-16 transform active:scale-95 transition-all duration-150 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900 disabled:active:scale-100 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:cursor-default"
				onClick={save}
			>
				<FlagBanner size={26} />
			</button>
		</div>
	);
}
