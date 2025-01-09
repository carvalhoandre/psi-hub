import React from 'react';

import { TimerParams, UseTimer } from './types';

let timer: NodeJS.Timeout;

const DELAY = 1000;

const useTimer = ({
	startWith,
	threshold,
	isResettable = true,
	onComplete,
}: TimerParams): UseTimer => {
	const [seconds, setSeconds] = React.useState<number>(startWith);

	const clear = () => clearInterval(timer);

	const resetTimer = () => {
		clear();
		setSeconds(startWith);
		start();
	};

	const handleTimer = (step: number) => {
		setSeconds((prev) => {
			if (prev !== threshold) return prev + step;

			onComplete?.();

			clear();

			return isResettable ? startWith : threshold;
		});
	};

	const start = () => {
		timer = setInterval(() => {
			handleTimer(threshold > startWith ? 1 : -1);
		}, DELAY);
	};

	return {
		seconds,
		start,
		clear,
		resetTimer,
	};
};

export default useTimer;
