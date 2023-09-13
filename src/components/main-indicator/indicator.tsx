import React from 'react';

type Props = {
	position: number;
};

function Indicator({ position }: Props) {
	return (
		<div
			style={{ transform: `translate(${position}%)` }}
			className='w-1/2  rounded-full translate-x-100 bg-orange-200/30 left-0 top-0 absolute h-full'
		></div>
	);
}

export default Indicator;
