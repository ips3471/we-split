import React, { ReactNode, RefObject, useRef } from 'react';
import SliderLayout from './layout/layout';

type Props = {
	onScroll?: () => void;
	swipe?: boolean;
	pages: { ref: RefObject<HTMLElement>; element: ReactNode }[];
	containerRef: RefObject<HTMLDivElement>;
};

function Slider({ swipe = false, pages, containerRef, onScroll }: Props) {
	return (
		<div
			ref={containerRef}
			onScroll={onScroll}
			className={`flex transition-transform duration-1000 ${
				swipe ? 'overflow-x-scroll' : 'overflow-x-hidden'
			} snap-mandatory snap-x`}
		>
			{pages.map((pageItem, index) => {
				return (
					<SliderLayout key={index} sectionRef={pageItem.ref}>
						<div className='snap-start'>{pageItem.element}</div>
					</SliderLayout>
				);
			})}
		</div>
	);
}

export default Slider;
