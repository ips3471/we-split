import React from 'react';

type Props = {
	text: string;
};

function ExpenseLabel({ text }: Props) {
	return (
		<span className='rounded-sm bg-black/50 text-white text-xs border px-1'>
			{text}
		</span>
	);
}

export default ExpenseLabel;
