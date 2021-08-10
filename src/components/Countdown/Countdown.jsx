import React, { useRef, useState, useEffect } from "react";
import ReactCountdown, { calcTimeDelta } from "react-countdown";
import InputMask from "@/components/Countdown/InputMask";
import CountdownDisplay from "@/components/Countdown/CountdownDisplay";
import CountdownControl from "@/components/Countdown/CountdownControl";
import { msToTime } from "@/mixins";
import { useAtom } from "jotai";
import { maxTimeAtom } from "@/components/Stopwatch/Timer";

export default function Countdown() {
	const [inputValue, setInputValue] = useState(0);
	const [value, setValue] = useState(0);
	const [date, setDate] = useState(Date.now());
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
		const now = Date.now();
		setDate(now + inputValue);
		setValue(inputValue);
	};

	const addMinute = () => {
		setDate(Date.now() + value + 60000);
	};

	const handleValue = (value) => {
		setInputValue(value);
		const now = Date.now();
		setDate(now + value);
	};

	useEffect(() => {
		setValue(inputValue);
	}, [inputValue]);

	return (
		<div className="max-w-xl w-full mx-auto text-gray-900 dark:text-gray-100 z-50 transition-colors duration-150 mt-8">
			<ReactCountdown
				daysInHours={true}
				ref={countdown}
				date={date}
				controlled={false}
				autoStart={false}
				intervalDelay={0}
				renderer={renderer}
				onPause={() => setStarted(false)}
				onStop={() => setStarted(false)}
				onComplete={() => setStarted(false)}
				onTick={(time) => setValue(time.total)}
			/>
			<CountdownControl reset={resetTimer} toggle={startOrStop} started={started} add={addMinute} />
			<div className="mt-8 flex justify-center">
				<InputMask onChange={(value) => handleValue(value)} />
			</div>
		</div>
	);
}
