import React from 'react';
import { useState, MouseEvent } from 'react';

interface NumPadProps {
	onSubmit: (amount: number) => void;
}

function NumPad({ onSubmit }: NumPadProps) {
	const [input, setInput] = useState('');

	const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		const { value } = e.currentTarget;
		if (value === 'clear') {
			return setInput('');
		}
		if (value === 'enter') {
			onSubmit(Number(input));
			return setInput('');
		}
		setInput(current => current + value);
	};
	return (
		<div className='w-11/12 bg-white p-6 text-2xl flex flex-col'>
			<input
				className='font-extrabold p-4 border-brand tracking-widest outline-none border w-full text-center'
				readOnly
				value={input}
			/>
			<div className='px-4  grid grid-cols-3'>
				{[
					'1',
					'2',
					'3',
					'4',
					'5',
					'6',
					'7',
					'8',
					'9',
					'clear',
					'0',
					'enter',
				].map(key => (
					<button
						value={key}
						onClick={handleButtonClick}
						className='p-6 text-slate-700 font-bold'
						key={key}
					>
						{key}
					</button>
				))}
			</div>
		</div>
	);
}

export default NumPad;
