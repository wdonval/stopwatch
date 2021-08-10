import React, { useEffect, useState, useRef, createRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ routes }) {
	return (
		<div className="z-20 sm:static bg-gray-100 dark:bg-gray-800 sm:bg-transparent sm:dark:bg-transparent fixed bottom-0 left-0 right-0 flex justify-center transition-colors duration-150">
			<nav className="shadow-none sm:shadow-inner flex flex-nowrap bg-gray-100 dark:bg-gray-800 mx-auto justify-center gap-1.5 relative p-1.5 rounded-xl xs:w-auto w-full transition-colors duration-150 text-gray-600 dark:text-gray-400">
				{routes.map((route, index) => (
					<NavLink
						exact
						className="relative z-10 font-semibold xs:flex xs:items-center justify-center block hover:bg-white dark:hover:bg-gray-900 py-2 px-4 xs:w-48 w-1/2 rounded-lg text-center transition-colors duration-150 xs:text-base text-xs outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-800"
						activeClassName="shadow-sm bg-white dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100"
						key={`navlink-${index}`}
						to={route.path}
					>
						<div className="flex items-end self-end justify-center xs:mb-0 xs:mr-2 mb-1 mr-0">{route.icon}</div>
						<div>{route.label}</div>
					</NavLink>
				))}
				<div className="absolute top-0 bottom-0 left-0 h-full rounded-lg"></div>
			</nav>
		</div>
	);
}
