import React, { useState } from "react";
import { Play, Pause, ArrowCounterClockwise, FlagBanner } from "phosphor-react";

export default function TimerControl({ started, reset, toggle, save }) {
	return (
		<div className="flex items-center justify-center gap-8">
			<button
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-gray-800 text-gray-100 h-16 w-16 border border-gray-800 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
				onClick={reset}
			>
				<ArrowCounterClockwise size={26} />
			</button>
			<button
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-primary text-white h-16 w-16 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
				onClick={toggle}
			>
				{!started && <Play size={26} />}
				{started && <Pause size={26} />}
			</button>
			<button
				disabled
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-gray-800 text-gray-100 h-16 w-16 border border-gray-800 transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:active:scale-100 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed disabled:shadow-none"
				onClick={save}
			>
				<FlagBanner size={26} />
			</button>
		</div>
	);
}
