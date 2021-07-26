import React, { useState } from "react";
import { Play, Pause, ArrowCounterClockwise, FlagBanner } from "phosphor-react";

export default function TimerControl({ started, reset, toggle, save }) {
	return (
		<div className="flex items-center gap-12">
			<button
				className="rounded-2xl shadow-lg flex items-center justify-center bg-white text-gray-900 h-16 w-16 border border-gray-100 transform active:scale-95 transition-transform duration-150"
				onClick={reset}
			>
				<ArrowCounterClockwise size={32} />
			</button>
			<button
				className="rounded-2xl shadow-lg flex items-center justify-center bg-primary text-white h-16 w-16 transform active:scale-95 transition-transform duration-150"
				onClick={toggle}
			>
				{!started && <Play size={32} />}
				{started && <Pause size={32} />}
			</button>
			<button className="rounded-2xl shadow-lg flex items-center justify-center bg-white text-gray-900 h-16 w-16 border border-gray-100 transform active:scale-95 transition-transform duration-150">
				<FlagBanner size={32} />
			</button>
		</div>
	);
}
