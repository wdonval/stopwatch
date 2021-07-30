import React, { useEffect, useRef, useState } from "react";
import { useTimer } from "@/hooks/useTimer";
import TimerControl from "@/TimerControl";
import TimerDisplay from "@/TimerDisplay";

export default function Timer() {
	let time = 0;
	const maxTime = 359999999;
	const [started, setStarted] = useState(false);
	const [max, setMax] = useState(false);
	const [renderTime, setRenderTime] = useState(new Date().getTime());
	const stopwatch = useTimer({ initialTime: time, countDown: true });

	function msToTime(duration) {
		if (duration >= maxTime) {
			duration = maxTime;
		}
		let milliseconds = parseInt(duration % 1000).toLocaleString("fr-FR", { minimumIntegerDigits: 3 }),
			seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor(duration / (1000 * 60 * 60));

		return { hours, minutes, seconds, milliseconds };
	}

	useEffect(() => {
		const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 10);
		// time += stopwatch.getElapsedRunningTime();
		// console.log(time);
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
			} else if (stopwatch.isRunning()) {
				stopwatch.pause();
				setStarted(false);
			}
		}
	};

	const resetTimer = () => {
		stopwatch.stop();
		setStarted(false);
		setMax(false);
	};

	const pauseTimer = () => {
		stopwatch.pause();
		setStarted(false);
		setMax(true);
	};

	return (
		<div className="max-w-xl w-full mx-auto text-gray-900">
			<TimerDisplay pause={pauseTimer} time={msToTime(stopwatch.getElapsedRunningTime())} />
			<TimerControl reset={resetTimer} toggle={startOrStop} started={started} save={() => console.log(msToTime(stopwatch.getElapsedRunningTime()))} />
		</div>
	);
}
