import React, { useEffect, useState, useRef, createRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ routes }) {
	return (
		<div className="flex justify-center text-gray-400">
			<nav className="flex bg-gray-800 mx-auto justify-center gap-1 my-2 relative p-1 rounded-xl">
				{routes.map((route, index) => (
					<NavLink
						exact
						className="hover:bg-gray-900  py-2 px-4 w-40 rounded-lg text-center transition-colors duration-150"
						activeClassName="bg-gray-900 hover:bg-gray-900 text-gray-100"
						key={`navlink-${index}`}
						to={route.path}
					>
						{route.label}
					</NavLink>
				))}
				<div className="absolute top-0 bottom-0 left-0 h-full rounded-lg"></div>
			</nav>
		</div>
	);
}
