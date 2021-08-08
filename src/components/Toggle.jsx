import React, { forwardRef } from "react";
import { Switch } from "@headlessui/react";
import { Moon, Sun } from "phosphor-react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Toggle = forwardRef(({ active, setActive }, ref) => {
	return (
		<Switch
			ref={ref}
			checked={active}
			onChange={setActive}
			className={classNames(
				active ? "bg-primary" : "bg-gray-200",
				"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
			)}
		>
			<span className="sr-only">Use setting</span>
			<span
				className={classNames(
					active ? "translate-x-5" : "translate-x-0",
					"pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
				)}
			>
				<span
					className={classNames(
						active ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
						"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
					)}
					aria-hidden="true"
				>
					<Sun className="text-gray-400" size={12} weight="bold" />
				</span>
				<span
					className={classNames(
						active ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
						"absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
					)}
					aria-hidden="true"
				>
					<Moon className="text-primary" size={12} weight="fill" />
				</span>
			</span>
		</Switch>
	);
});

export default Toggle;
