import React, { useRef, useState } from 'react';
import Indicator from '../main-indicator/indicator';
import MainNavButton from '../main-nav-button/main-nav-button';
import MainSliderItem from '../main-slider-item.tsx/main-slider-item';
import Expenses from '../../expenses/expenses';
import { useGroupStore } from '../../utils/store';
import Overview from '../overview/overview';

function MainBody() {
	const group = useGroupStore(state => state.currentGroup);
	const [progress, setProgress] = useState<number>(0);
	const sliderRef = useRef<HTMLDivElement>(null);
	const overviewRef = useRef<HTMLDivElement>(null);
	const expensesRef = useRef<HTMLDivElement>(null);

	if (!group) return null;

	const handleScroll = (e: React.UIEvent<HTMLElement>) => {
		const { clientWidth, scrollLeft, scrollWidth } = e.currentTarget;
		const percentage = Math.ceil(
			(scrollLeft / (scrollWidth - clientWidth)) * 100,
		);
		setProgress(percentage);
	};

	return (
		<main className='flex-1  '>
			<div className='w-full text-center bg-[#f6f6f6] h-full flex flex-col'>
				<nav className=' bg-[#f39d11] p-2 flex justify-center items-center text-white'>
					<div className='relative flex justify-around w-2/3'>
						<MainNavButton
							name='Overview'
							scrollContainerRef={sliderRef}
							scrollToRef={overviewRef}
						/>
						<MainNavButton
							name='Expenses'
							scrollContainerRef={sliderRef}
							scrollToRef={expensesRef}
						/>
						<Indicator position={progress} />
					</div>
				</nav>

				<div
					ref={sliderRef}
					onScroll={handleScroll}
					className='  flex transition-transform overflow-x-scroll snap-mandatory snap-x'
				>
					<MainSliderItem sectionRef={overviewRef}>
						<Overview />
					</MainSliderItem>

					<MainSliderItem sectionRef={expensesRef}>
						<Expenses isFocused={progress > 30} />
					</MainSliderItem>
				</div>
			</div>
		</main>
	);
}

export default MainBody;
