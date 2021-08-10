import React, { useState, forwardRef } from "react";
import Tippy from "@tippyjs/react/headless";
import { useSpring, motion } from "framer-motion";

const calculateDirection = (initialPlacement, translateValue) => {
	switch (initialPlacement) {
		case "top":
			return { value: translateValue, axis: "y" };
		case "bottom":
			return { value: -translateValue, axis: "y" };
		case "left":
			return { value: translateValue, axis: "x" };
		case "right":
			return { value: -translateValue, axis: "x" };
	}
};

export default function Tooltip({ placement, content, children }) {
	const translateValue = 5;
	const initialPlacement = placement ? placement.split("-")[0] : "top";
	const springConfig = { damping: 15, stiffness: 300 };
	const [initialTranslate] = useState(calculateDirection(initialPlacement, translateValue).value);
	const [initialDirection] = useState(calculateDirection(initialPlacement, translateValue).axis);
	const initialOpacity = 0;
	const translate = useSpring(initialTranslate, springConfig);
	const opacity = useSpring(initialOpacity, springConfig);

	function onMount() {
		opacity.set(1);
		translate.set(0);
	}

	function onHide({ unmount }) {
		const cleanup = translate.onChange((value) => {
			if (value >= initialTranslate) {
				cleanup();
				unmount();
			}
		});

		opacity.set(initialOpacity);
		translate.set(initialTranslate);
	}

	return (
		<Tippy
			render={(attrs) => (
				<motion.div
					className="tooltip bg-gray-900 dark:bg-gray-800 text-white rounded px-2 py-1 text-sm"
					tabIndex="-1"
					style={{ opacity, [initialDirection]: translate }}
					{...attrs}
				>
					{content}
				</motion.div>
			)}
			animation={true}
			onMount={onMount}
			onHide={onHide}
			placement={placement}
		>
			{children}
		</Tippy>
	);
}
