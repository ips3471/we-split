import React from 'react';
import PrevIcon from 'jsx:./assets/arrow-left.svg';

type Props = {
	onPrev: () => void;
	onNext: () => void;
	nameForNext: string;
};

function CreateNav({ nameForNext, onNext, onPrev }: Props) {
	return (
		<nav className='bg-orange-400  p-3  flex items-center justify-between'>
			<button className='w-12 p-2' onClick={onPrev}>
				<PrevIcon />
			</button>
			<button className='text-white p-2 text-2xl' onClick={onNext}>
				{nameForNext}
			</button>
		</nav>
	);
}

export default CreateNav;
