import React, {useState} from "react";
import TimerLap from "@/components/TimerLap";
import {FileArrowDown} from 'phosphor-react'
import Modal from '@/components/Modal'
import Tooltip from '@/components/Tooltip'

const defaultLap = { hours: 0, minutes: 0, seconds: 0, milliseconds: "000", duration: 0 };

export default function TimerLaps({ laps }) {

	const [modalExportOpen, setModalExportOpen] = useState(false);

	return (
		!!laps.length && (
			<div className="py-8">
				<div className="grid grid-cols-3 w-full px-4 py-1">
					<span className="text-sm uppercase">Durée</span>
					<span className="text-sm uppercase">Delta</span>
				</div>
				<div className="flex flex-col gap-y-4">
					{laps.map((lap, index) => (
						<TimerLap key={`timerlap-${index}`} lap={lap} index={index} previousLap={index - 1 in laps ? laps[index - 1] : defaultLap} />
					))}
				</div>
				<div className="flex justify-end">
					<Tooltip>
						<button onClick={() => setModalExportOpen(!modalExportOpen)} className="mt-4 relative justify-self-end flex justify-center items-center p-2 bg-white rounded-lg text-gray-600 shadow transform active:scale-95 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"><FileArrowDown size={24} /></button>
					</Tooltip>
				</div>
				<Modal open={modalExportOpen} setOpen={setModalExportOpen}></Modal>
				
			</div>
		)
	);
}
