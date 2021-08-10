export const msToTime = (duration, maxTime) => {
	if (duration >= maxTime) {
		duration = maxTime;
	}
	let milliseconds = parseInt(duration % 1000).toLocaleString("fr-FR", { minimumIntegerDigits: 3 }),
		seconds = Math.floor((duration / 1000) % 60),
		minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor(duration / (1000 * 60 * 60));

	return { hours, minutes, seconds, milliseconds, duration };
};

export const msToTimeString = (duration) => {
	let milliseconds = parseInt(duration % 1000).toLocaleString("fr-FR", { minimumIntegerDigits: 3 }),
		seconds = Math.floor((duration / 1000) % 60).toLocaleString("fr-FR", { minimumIntegerDigits: 2 }),
		minutes = Math.floor((duration / (1000 * 60)) % 60).toLocaleString("fr-FR", { minimumIntegerDigits: 2 }),
		hours = Math.floor(duration / (1000 * 60 * 60)).toLocaleString("fr-FR", { minimumIntegerDigits: 2 });

	return { hours, minutes, seconds, milliseconds, duration };
};

export const timeToMs = (hours, minutes, seconds) => {
	let ms = hours * 60 * 60 * 1000;
	ms += minutes * 60 * 1000;
	ms += seconds * 1000;
	return ms;
};

export const displayMilliseconds = (time) => {
	if (time.milliseconds == 0) {
		return "000";
	} else {
		return time.milliseconds;
	}
};

export const displaySeconds = (time) => {
	if (time.hours != 0 || time.minutes != 0) {
		if (time.seconds == 0) {
			return "00";
		} else if (time.seconds < 10) {
			return `0${time.seconds}`;
		} else {
			return time.seconds;
		}
	} else {
		return time.seconds;
	}
};

export const displayMinutes = (time) => {
	if (time.hours != 0) {
		if (time.minutes == 0) {
			return "00";
		} else if (time.minutes < 10) {
			return `0${time.minutes}`;
		} else {
			return time.minutes;
		}
	} else {
		if (time.minutes == 0) {
			return;
		} else {
			return time.minutes;
		}
	}
};

export const displayHours = (time) => {
	if (time.hours == 0) {
		return;
	} else {
		return time.hours;
	}
};

export const displaySecondsFull = (time) => {
	if (time.seconds < 10) {
		return `0${time.seconds}`;
	}
	return time.seconds;
};

export const displayMinutesFull = (time) => {
	if (time.minutes < 10) {
		return `0${time.minutes}`;
	}
	return time.minutes;
};

export const displayHoursFull = (time) => {
	if (time.hours < 10) {
		return `0${time.hours}`;
	}
	return time.hours;
};
