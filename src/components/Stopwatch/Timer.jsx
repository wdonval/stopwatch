import React, { useEffect, useRef, useState } from "react";
import { useTimer } from "@/hooks/useTimer";
import TimerControl from "@/components/Stopwatch/TimerControl";
import TimerDisplay from "@/components/Stopwatch/TimerDisplay";
import TimerLaps from "@/components/Stopwatch/TimerLaps";
import { atom, useAtom } from "jotai";
import { msToTime } from "@/mixins";

export const maxTimeAtom = atom(359999999);
const initialLapsAtom = atom([]);
export const lapsAtom = atom(
	(get) => get(initialLapsAtom),
	(get, set, newLap) => {
		set(initialLapsAtom, newLap);
	}
);

export default function Timer() {
	let time = 0;
	const [started, setStarted] = useState(false);
	const [max, setMax] = useState(false);
	const [renderTime, setRenderTime] = useState(new Date().getTime());
	const stopwatch = useTimer({ initialTime: time });
	const [laps, setLaps] = useAtom(lapsAtom);
	const maxTime = useAtom(maxTimeAtom);

	useEffect(() => {
		const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 10);
		if (stopwatch.getElapsedRunningTime() >= maxTime) {
			pauseTimer();
		}
		return () => {
			clearTimeout(timeout);
		};
	}, [renderTime]);

	const startOrStop = () => {
		if (!max) {
			if (stopwatch.isStopped()) {
				stopwatch.start();
				setStarted(true);
			} else if (stopwatch.isPaused()) {
				stopwatch.resume();
				setStarted(true);
			} else if (stopwatch.isRunning() || stopwatch.isStarted()) {
				stopwatch.pause();
				saveLap(msToTime(stopwatch.getElapsedRunningTime(), maxTime));
				setStarted(false);
			}
		}
	};

	const resetTimer = () => {
		stopwatch.stop();
		setStarted(false);
		setMax(false);
		setLaps([]);
	};

	const pauseTimer = () => {
		stopwatch.pause();
		setStarted(false);
		setMax(true);
	};

	const saveLap = (lap) => {
		setLaps([...laps, lap]);
	};

	return (
		<div className="max-w-xl w-full mx-auto text-gray-900 dark:text-gray-100 z-50 transition-colors duration-150">
			<TimerDisplay pause={pauseTimer} time={msToTime(stopwatch.getElapsedRunningTime(), maxTime)} />
			<TimerControl
				reset={resetTimer}
				toggle={startOrStop}
				started={started}
				save={() => saveLap(msToTime(stopwatch.getElapsedRunningTime(), maxTime))}
			/>
			<TimerLaps laps={laps} />
		</div>
	);
}
