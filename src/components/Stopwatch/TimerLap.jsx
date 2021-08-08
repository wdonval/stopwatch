import React from "react";
import { displayHoursFull, displayMinutesFull, displaySecondsFull, msToTime } from "@/mixins";
import { useAtom } from "jotai";
import { maxTimeAtom, lapsAtom } from "@/components/Stopwatch/Timer";
import { Trash } from "phosphor-react";

export default function TimerLap({ lap, previousLap, index }) {
	const [laps, setLaps] = useAtom(lapsAtom);
	const maxTime = useAtom(maxTimeAtom);
	const delta = msToTime(lap.duration - previousLap.duration, maxTime);

	const remove = (index) => {
		setLaps(laps.filter((_, i) => i !== index));
	};

	return (
		<div className="rounded-xl shadow bg-white dark:bg-gray-800 py-2 px-4 flex justify-between tabular-nums xxs:text-base text-sm font-semibold gap-8 transition-colors duration-150">
			<div className="flex xxs:flex-row flex-col justify-between sm:grid sm:grid-cols-3 w-full gap-y-1">
				<div className="grid grid-cols-2 place-content-center">
					<span className="inline-flex items-center xxs:hidden text-xs text-gray-600 dark:text-gray-400 uppercase transition-colors duration-15">
						Durée
					</span>
					<div className="flex tracking-wider items-center justify-end xxs:justify-start">
						<div>{displayHoursFull(lap)}:</div>
						<div>{displayMinutesFull(lap)}:</div>
						<div>{displaySecondsFull(lap)},</div>
						<div>{lap.milliseconds}</div>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<span className="inline-flex items-center xxs:hidden text-xs text-gray-600 dark:text-gray-400 uppercase transition-colors duration-15">
						Delta
					</span>
					<div className="flex tracking-wider items-center justify-end xxs:justify-start">
						<div>{displayHoursFull(delta)}:</div>
						<div>{displayMinutesFull(delta)}:</div>
						<div>{displaySecondsFull(delta)},</div>
						<div>{delta.milliseconds}</div>
					</div>
				</div>
				<button
					onClick={() => remove(index)}
					className="justify-self-end flex justify-center items-center p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transform active:scale-95 transition-all duration-150 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800"
				>
					<Trash size={24} />
				</button>
			</div>
		</div>
	);
}
