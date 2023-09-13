import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	index: number;
};

function SliderLayout({ children, index }: Props) {
	return (
		<div
			className={`-translate-x-[${
				index * 100
			}%] flex transition-transform duration-500 overflow-x-scroll border-blue-200 `}
		>
			{children}
		</div>
	);
}

export default SliderLayout;
