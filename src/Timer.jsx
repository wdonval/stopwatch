import React, { useEffect, useRef, useState } from "react";
import { useStopwatch } from "react-use-precision-timer";
import TimerControl from "@/TimerControl";
import TimerDisplay from "@/TimerDisplay";

export default function Timer() {
	const [started, setStarted] = useState(false);
	const [max, setMax] = useState(false);
	const [renderTime, setRenderTime] = useState(new Date().getTime());
	const stopwatch = useStopwatch();

	function msToTime(duration) {
		let milliseconds = parseInt(duration % 1000).toLocaleString("fr-FR", { minimumIntegerDigits: 3 }),
			seconds = Math.floor((duration / 1000) % 60),
			minutes = Math.floor((duration / (1000 * 60)) % 60),
			hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

		return { hours, minutes, seconds, milliseconds };
	}

	useEffect(() => {
		const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 10);
		return () => {
			clearTimeout(timeout);
		};
	});

	const startOrStop = () => {
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
		<>
			<TimerDisplay pause={pauseTimer} time={msToTime(stopwatch.getElapsedRunningTime())} />
			<TimerControl reset={resetTimer} toggle={startOrStop} started={started} />
		</>
	);
}
