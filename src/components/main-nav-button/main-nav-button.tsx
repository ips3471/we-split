import React, { RefObject } from 'react';

type Props = {
	name: string;
	scrollToRef: RefObject<HTMLElement>;
	scrollContainerRef: RefObject<HTMLElement>;
};

function MainNavButton({ name, scrollToRef, scrollContainerRef }: Props) {
	const handleClick = () => {
		scrollContainerRef.current?.scrollTo({
			left: scrollToRef.current?.getBoundingClientRect().left,
			top: 0,
			behavior: 'smooth',
		});
	};
	return <button onClick={handleClick}>{name}</button>;
}

export default MainNavButton;
