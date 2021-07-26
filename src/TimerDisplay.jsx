import React from "react";

export default function TimerDisplay({ time }) {
	return (
		<div className="flex items-end font-bold">
			{time.hours != 0 && <div className="text-6xl">{time.hours}</div>}
			{time.hours != 0 && <div className="text-6xl">:</div>}
			{(time.minutes != 0 || time.hours != 0) && <div className="text-6xl">{time.minutes}</div>}
			{time.minutes != 0 && <div className="text-6xl">:</div>}
			{(time.seconds != 0 || time.minutes != 0 || time.hours != 0) && (
				<div className="text-6xl">{time.minutes != 0 && time.seconds < 10 ? `0${time.seconds}` : time.seconds}</div>
			)}

			{time.seconds == 0 && <div className="text-6xl">0</div>}
			{time.milliseconds != 0 && <div className="text-3xl">{time.milliseconds}</div>}
			{time.milliseconds == 0 && <div className="text-3xl">000</div>}
		</div>
	);
}
