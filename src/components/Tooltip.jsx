import React from "react";
import Tippy from "@tippyjs/react/headless";
import { useSpring, motion } from "framer-motion";

export default function Tooltip({ content, children }) {
	const springConfig = { damping: 15, stiffness: 300 };
	const initialY = 5;
	const initialOpacity = 0;
	const y = useSpring(initialY, springConfig);
	const opacity = useSpring(initialOpacity, springConfig);

	function onMount() {
		opacity.set(1);
		y.set(0);
	}

	function onHide({ unmount }) {
		const cleanup = y.onChange((value) => {
			if (value >= initialY) {
				cleanup();
				unmount();
			}
		});

		opacity.set(initialOpacity);
		y.set(initialY);
	}
	return (
		<Tippy
			render={(attrs) => (
				<motion.div className="bg-gray-900 text-white rounded px-2 py-1 text-sm" tabIndex="-1" style={{ opacity, y }} {...attrs}>
					{content}
					<div
						className="before:-mt-0.5 before:rounded-sm before:absolute before:w-2.5 before:h-2.5 before:bg-gray-900 absolute w-4 h-4 bg-gray-900 invisible before:visible before:transform before:rotate-45 before:left-1/2 before:-translate-x-1/2"
						data-popper-arrow
					></div>
				</motion.div>
			)}
			animation={true}
			onMount={onMount}
			onHide={onHide}
		>
			{children}
		</Tippy>
	);
}
