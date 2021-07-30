import React, { useState } from "react";
import { Play, Pause, ArrowCounterClockwise, FlagBanner } from "phosphor-react";

export default function TimerControl({ started, reset, toggle, save }) {
	return (
		<div className="flex items-center justify-center gap-12">
			<button
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-white text-gray-900 h-16 w-16 border border-gray-100 transform active:scale-95 transition-transform duration-150"
				onClick={reset}
			>
				<ArrowCounterClockwise size={26} />
			</button>
			<button
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-primary text-white h-16 w-16 transform active:scale-95 transition-transform duration-150"
				onClick={toggle}
			>
				{!started && <Play size={26} />}
				{started && <Pause size={26} />}
			</button>
			<button
				className="flex-shrink-0 rounded-2xl shadow-lg flex items-center justify-center bg-white text-gray-900 h-16 w-16 border border-gray-100 transform active:scale-95 transition-transform duration-150"
				onClick={save}
			>
				<FlagBanner size={26} />
			</button>
		</div>
	);
}
