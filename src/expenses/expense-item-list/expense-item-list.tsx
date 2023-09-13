import React from 'react';
import ArrowIcon from 'jsx:./assets/arrow-up-right.svg';
import ExpenseLabeledItem from '../../components/expense-item-list/expense-labeled-item';
import numberToBalance from '../../utils/numberToBalance';
import { Expense } from '../../interfaces/global';

type Props = {
	item: Expense;
};

function ExpenseItemList({ item }: Props) {
	return (
		<li className='border-b flex relative shadow-sm p-4 w-full justify-between items-center'>
			<div className='w-3 h-3 absolute top-1 right-1 shadow-lg'>
				<ArrowIcon />
			</div>
			<section className='flex items-center space-x-2 flex-1'>
				<ExpenseLabeledItem text={item.by} label='by' className={'w-20'} />

				<div className='flex flex-col justify-center items-start'>
					<p>{item.name}</p>
					<ExpenseLabeledItem label='for' text={item.for.join(', ')} />
				</div>
			</section>
			<p className='w-20 text-right text-sm'>{numberToBalance(item.amount)}</p>
		</li>
	);
}

export default ExpenseItemList;
