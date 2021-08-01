import React from "react";

export default function TimerLap() {
	return (
		<div className="rounded-xl shadow-lg bg-white p-4 flex justify-between tabular-nums font-semibold gap-8">
			<div className="text-gray-500 flex-shrink-0">Tour 1</div>
			<div className="flex gap-8">
				<div>00:05,652</div>
				<div>01:21,394</div>
			</div>
		</div>
	);
}
