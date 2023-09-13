import React from 'react';
import ExpenseLabel from './expense-label';

type Props = {
	text: string;
	label: string;
	className?: string;
};

function ExpenseLabeledItem({ text, className, label }: Props) {
	return (
		<div className={`${className} flex gap-1 items-center`}>
			<ExpenseLabel text={label} />
			<p className='text-xs'>{text}</p>
		</div>
	);
}

export default ExpenseLabeledItem;
