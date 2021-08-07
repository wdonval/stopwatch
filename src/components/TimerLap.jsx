import React from "react";
import { displayHoursFull, displayMinutesFull, displaySecondsFull, msToTime } from "@/mixins";
import { useAtom } from "jotai";
import { maxTimeAtom, lapsAtom } from "@/components/Timer";
import { Trash } from "phosphor-react";

export default function TimerLap({ lap, previousLap, index }) {
	const [laps, setLaps] = useAtom(lapsAtom);
	const maxTime = useAtom(maxTimeAtom);
	const delta = msToTime(lap.duration - previousLap.duration, maxTime);

	const remove = (index) => {
		setLaps(laps.filter((_, i) => i !== index));
	};

	return (
		<div className="rounded-xl shadow bg-white py-2 px-4 flex justify-between tabular-nums font-semibold gap-8">
			<div className="grid grid-cols-3 w-full">
				<div className="flex tracking-wider items-center">
					<div>{displayHoursFull(lap)}:</div>
					<div>{displayMinutesFull(lap)}:</div>
					<div>{displaySecondsFull(lap)},</div>
					<div>{lap.milliseconds}</div>
				</div>
				<div className="flex tracking-wider items-center">
					<div>{displayHoursFull(delta)}:</div>
					<div>{displayMinutesFull(delta)}:</div>
					<div>{displaySecondsFull(delta)},</div>
					<div>{delta.milliseconds}</div>
				</div>
				<button
					onClick={() => remove(index)}
					className="justify-self-end flex justify-center items-center p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
				>
					<Trash size={24} />
				</button>
			</div>
		</div>
	);
}
