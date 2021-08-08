import React, { useRef, useState } from "react";
import ReactCountdown from "react-countdown";
import InputMask from "@/components/Countdown/InputMask";
import CountdownDisplay from "@/components/Countdown/CountdownDisplay";
import CountdownControl from "@/components/Countdown/CountdownControl";
import { msToTime } from "@/mixins";
import { useAtom } from "jotai";
import { maxTimeAtom } from "@/components/Stopwatch/Timer";

export default function Countdown() {
	const [date, setDate] = useState(new Date(Date.now()));
	const countdown = useRef(null);
	const [started, setStarted] = useState(false);
	const maxTime = useAtom(maxTimeAtom);

	const renderer = ({ total, completed }) => {
		return <CountdownDisplay time={msToTime(total, maxTime)} />;
	};

	const startOrStop = () => {
		const api = countdown.current.getApi();
		if (api.isStopped()) {
			api.start();
			setStarted(true);
		} else if (api.isPaused()) {
			api.start();
			setStarted(true);
		} else {
			api.pause();
			setStarted(false);
		}
	};

	const resetTimer = () => {
		const api = countdown.current.getApi();
		api.stop();
		setStarted(false);
	};

	return (
		<div className="max-w-xl w-full mx-auto text-gray-900 dark:text-gray-100 z-50 transition-colors duration-150 mt-8">
			<ReactCountdown
				ref={countdown}
				date={date}
				controlled={false}
				autoStart={false}
				renderer={renderer}
				onPause={() => setStarted(false)}
				onStop={() => setStarted(false)}
				onComplete={() => setStarted(false)}
			/>
			<CountdownControl reset={resetTimer} toggle={startOrStop} started={started} />
			<div className="mt-8 flex justify-center">
				<InputMask onChange={(value) => setDate(new Date(Date.now() + value))} />
			</div>
		</div>
	);
}
