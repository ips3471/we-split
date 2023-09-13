import React, { useState } from 'react';
import { Expense } from '../../interfaces/global';
import ExpenseLabeledItem from './expense-labeled-item';
import numberToBalance from '../../utils/numberToBalance';
import ArrowIcon from 'jsx:./assets/arrow-up-right.svg';
import FullPageLayout from '../full-page-layout/full-page-layout';
import ExpenseItemDetail from '../expense-item-detail/expense-item-detail';

type Props = {
	expense: Expense;
};

function ExpenseItemList({ expense }: Props) {
	const [isOpenDetail, setIsOpenDetail] = useState(false);
	return (
		<>
			<li
				onClick={() => setIsOpenDetail(true)}
				className='border-b flex relative shadow-sm p-4 w-full justify-between items-center'
			>
				<div className='w-3 h-3 absolute top-1 right-1 shadow-lg'>
					<ArrowIcon />
				</div>
				<section className='flex items-center space-x-2 flex-1'>
					<ExpenseLabeledItem text={expense.by} label='by' className={'w-20'} />

					<div className='flex flex-col justify-center items-start'>
						<p>{expense.name}</p>
						<ExpenseLabeledItem label='for' text={expense.for.join(', ')} />
					</div>
				</section>
				<p className='w-20 text-right text-sm'>
					{numberToBalance(expense.amount)}
				</p>
			</li>
			{isOpenDetail && (
				<FullPageLayout onClose={() => setIsOpenDetail(false)}>
					<ExpenseItemDetail item={expense} />
				</FullPageLayout>
			)}
		</>
	);
}

export default ExpenseItemList;
