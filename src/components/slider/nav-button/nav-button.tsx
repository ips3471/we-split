import React, { RefObject } from 'react';

type Props = {
	name: string;
	targetRef: RefObject<HTMLElement>;
	containerRef: RefObject<HTMLElement>;
};

function SliderNavButton({ name, targetRef, containerRef }: Props) {
	const handleClick = () => {
		containerRef.current?.scrollTo({
			left: targetRef.current?.getBoundingClientRect().left,
			top: 0,
			behavior: 'smooth',
		});
	};
	return <button onClick={handleClick}>{name}</button>;
}

export default SliderNavButton;
