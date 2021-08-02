import React from "react";
import TimerLap from "@/components/TimerLap";

const defaultLap = { hours: 0, minutes: 0, seconds: 0, milliseconds: "000", duration: 0 };

export default function TimerLaps({ laps }) {
	return (
		!!laps.length && (
			<div className="py-8">
				<div className="grid grid-cols-3 w-full px-4 py-2">
					<span>Durée</span>
					<span>Delta</span>
				</div>
				<div className="flex flex-col gap-y-4">
					{laps.map((lap, index) => (
						<TimerLap key={`timerlap-${index}`} lap={lap} index={index} previousLap={index - 1 in laps ? laps[index - 1] : defaultLap} />
					))}
				</div>
			</div>
		)
	);
}
