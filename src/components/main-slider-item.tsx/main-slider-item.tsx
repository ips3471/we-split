import React, { ReactNode, RefObject } from 'react';
import SlideLayout from '../slide-layout/slide-layout';
type Props = {
	sectionRef: RefObject<HTMLDivElement>;
	children: ReactNode;
};

function MainSliderItem({ children, sectionRef }: Props) {
	return (
		<div ref={sectionRef}>
			<SlideLayout>{children}</SlideLayout>
		</div>
	);
}

export default MainSliderItem;
