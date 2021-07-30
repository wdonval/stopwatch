import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Timer from "@/components/Timer";

function App() {
	return (
		<div className="bg-gray-50 mx-auto">
			{/* <Tab.Group>
				<Tab.List>
					<Tab>Stopwatch</Tab>
					<Tab>Countdown</Tab>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel> */}
			<Timer />
			{/* </Tab.Panel>
					<Tab.Panel>Content 2</Tab.Panel>
				</Tab.Panels>
			</Tab.Group> */}
		</div>
	);
}

export default App;
