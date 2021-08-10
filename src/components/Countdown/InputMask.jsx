import React, { useState, useRef, useEffect } from "react";
import { timeToMs } from "@/mixins";

String.prototype.replaceBetween = function (start, end, what) {
	return this.substring(0, start) + what + this.substring(end);
};

export default function InputMask({ onChange }) {
	const inputRef = useRef(null);
	const valueTemplate = "001000";
	const [value, setValue] = useState(valueTemplate);
	const [valueCount, setValueCount] = useState("1000");
	const maxValueCount = 6;

	const toString = (value) => {
		const suffixes = ["h", "min", "s"];
		const array = value.match(/.{2}/g);
		let string = "";
		array.forEach((item, index) => {
			string = string + item + `<span class="text-sm font-normal">${suffixes[index]}</span>` + " ";
		});
		return string;
	};

	const splitTime = (timeString) => {
		const array = timeString.match(/.{2}/g);
		return { hours: parseInt(array[0], 10), minutes: parseInt(array[1], 10), seconds: parseInt(array[2], 10) };
	};

	useEffect(() => {
		const splittedTime = splitTime(value);
		onChange(timeToMs(splittedTime.hours, splittedTime.minutes, splittedTime.seconds));
	}, [value]);

	const handleInput = (event) => {
		const inputValue = event.target.value;
		if (!isNaN(inputValue) && (inputValue != 0 || valueCount != 0) && valueCount.length < maxValueCount) {
			setValue(`${valueCount}${inputValue}`.padStart(maxValueCount, "0"));
			setValueCount(`${valueCount}${inputValue}`);
		}
	};

	const remove = () => {
		const newValue = valueCount.slice(0, -1);
		setValue(newValue.padStart(maxValueCount, "0"));
		setValueCount(newValue);
	};

	const removeAll = () => {
		const newValue = "";
		setValue(newValue.padStart(maxValueCount, "0"));
		setValueCount(newValue);
	};

	const handleKeyDown = (event) => {
		if (
			event.code.toLowerCase() === "backspace" ||
			event.key.toLowerCase() === "backspace" ||
			event.code.toLowerCase() === "delete" ||
			event.key.toLowerCase() === "delete"
		) {
			if (event.ctrlKey) {
				removeAll();
			} else {
				remove();
			}
		}
	};

	return (
		<div className="inline-block relative w-auto">
			<input
				ref={inputRef}
				className="transition-colors duration-150 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 select-all text-transparent text-center tabular-nums w-56 px-4 h-16 caret-transparent rounded-xl outline-none focus:outline-none shadow-sm focus:ring-primary focus:border-primary dark:focus:border-primary block border-gray-300 dark:border-gray-700"
				type="text"
				value=""
				onInput={handleInput}
				onKeyDown={handleKeyDown}
				inputMode="numeric"
			/>
			<div
				className="text-2xl absolute tabular-nums inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center font-medium pointer-events-none"
				dangerouslySetInnerHTML={{
					__html: toString(value),
				}}
			></div>
		</div>
	);
}
