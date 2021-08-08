import React from "react";
import { displayHours, displayMinutes, displaySeconds, displayMilliseconds } from "@/mixins";

export default function CountdownDisplay({ time }) {
	return (
		<div className="flex items-end justify-center font-bold gap-2 tabular-nums rounded-2xl py-8">
			{displayHours(time) && <div className="text-6xl">{displayHours(time)}</div>}
			{time.hours != 0 && <div className="text-6xl">:</div>}
			{displayMinutes(time) && <div className="text-6xl">{displayMinutes(time)}</div>}
			{(time.minutes != 0 || time.hours != 0) && <div className="text-6xl">:</div>}
			<div className="text-6xl">{displaySeconds(time)}</div>
			{/* <div className="text-3xl">{displayMilliseconds(time)}</div> */}
		</div>
	);
}
