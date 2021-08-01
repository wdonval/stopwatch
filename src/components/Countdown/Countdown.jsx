import React, { useState, useEffect } from "react";
import ReactCountdown from "react-countdown";

export default function Countdown() {
	const [time, setTime] = useState(1000);
	const [animationState, setAnimationState] = useState("running");

	const displayMilliseconds = (time) => {
		if (time.milliseconds == 0) {
			return "000";
		} else {
			return time.milliseconds;
		}
	};

	const displaySeconds = (time) => {
		if (time.hours != 0 || time.minutes != 0) {
			if (time.seconds == 0) {
				return "00";
			} else if (time.seconds < 10) {
				return `0${time.seconds}`;
			} else {
				return time.seconds;
			}
		} else {
			return time.seconds;
		}
	};

	const displayMinutes = (time) => {
		if (time.hours != 0) {
			if (time.minutes == 0) {
				return "00";
			} else if (time.minutes < 10) {
				return `0${time.minutes}`;
			} else {
				return time.minutes;
			}
		} else {
			if (time.minutes == 0) {
				return;
			} else {
				return time.minutes;
			}
		}
	};

	const displayHours = (time) => {
		if (time.hours == 0) {
			return;
		} else {
			return time.hours;
		}
	};
	const renderer = (time) => {
		time = { ...time, milliseconds: time.milliseconds.toLocaleString("fr-FR", { minimumIntegerDigits: 3 }) };
		if (time.completed) {
			useEffect(() => {
				setAnimationState("paused");
			}, []);
			return <div>ok</div>;
		} else {
			// Render a countdown
			return (
				<>
					<div className="flex items-end justify-center font-bold gap-2 tabular-nums rounded-2xl py-8 text-gray-100">
						{displayHours(time) && <div className="text-6xl">{displayHours(time)}</div>}
						{time.hours != 0 && <div className="text-6xl">:</div>}
						{displayMinutes(time) && <div className="text-6xl">{displayMinutes(time)}</div>}
						{(time.minutes != 0 || time.hours != 0) && <div className="text-6xl">:</div>}
						<div className="text-6xl">{displaySeconds(time)}</div>
						<div className="text-3xl">{displayMilliseconds(time)}</div>
					</div>
					<svg>
						<circle
							style={{
								strokeDasharray: "113px",
								strokeDashoffset: "0px",
								strokeLinecap: "round",
								strokeWidth: "2px",
								stroke: "white",
								fill: "none",
								animation: `countdown ${time / 1000}s linear infinite forwards`,
								animationPlayState: animationState,
							}}
							r="18"
							cx="20"
							cy="20"
						></circle>
					</svg>
				</>
			);
		}
	};

	return (
		<div>
			<ReactCountdown precision={3} intervalDelay={0} date={Date.now() + time} renderer={renderer} />
		</div>
	);
}
