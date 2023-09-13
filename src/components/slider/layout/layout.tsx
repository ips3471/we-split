import React, { ReactNode, RefObject } from 'react';
import SlideLayout from '../../slide-layout/slide-layout';
type Props = {
	sectionRef: RefObject<HTMLElement>;
	children: ReactNode;
};

function SliderLayout({ children, sectionRef }: Props) {
	return (
		<section className='border-2' ref={sectionRef}>
			<SlideLayout>{children}</SlideLayout>
		</section>
	);
}

export default SliderLayout;
