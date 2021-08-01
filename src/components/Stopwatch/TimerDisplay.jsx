import React from "react";

export default function TimerDisplay({ time }) {
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

	return (
		<div className="flex items-end justify-center font-bold gap-2 tabular-nums rounded-2xl py-8">
			{displayHours(time) && <div className="text-6xl">{displayHours(time)}</div>}
			{time.hours != 0 && <div className="text-6xl">:</div>}
			{displayMinutes(time) && <div className="text-6xl">{displayMinutes(time)}</div>}
			{(time.minutes != 0 || time.hours != 0) && <div className="text-6xl">:</div>}
			<div className="text-6xl">{displaySeconds(time)}</div>
			<div className="text-3xl">{displayMilliseconds(time)}</div>
		</div>
	);
}
