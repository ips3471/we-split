import React, { useEffect, useState } from 'react';
import { Expense } from '../../interfaces/global';
import BalanceLabel from '../form-label/balance-label/balance-label';
import ByLabel from '../form-label/by-label/by-label';
import ForItem from './for-item/for-item';
import CategoryIcon from '../icons/category-icon/category-icon';
import { useExpenseFormStore } from '../../utils/store';
import ClickableContainer from '../layouts/clickable-container';
import Modal from '../modal/Modal';
import NumPad from '../num-pad/num-pad';

type Props = {
	item: Expense;
};

function ExpenseItemDetail({ item }: Props) {
	const init = useExpenseFormStore(state => state.onExpenseChanged);
	const [isCalcOpen, setIsCalcOpen] = useState(false);
	const useFormObj = useExpenseFormStore(state => ({
		state: state.currentExpense,
		onChanged: state.onAmountChanged,
	}));
	const { state, onChanged } = useFormObj;

	useEffect(() => {
		init(item);
	}, [item]);

	const handleSubmit = (value: number) => {
		value && onChanged(value);
		setIsCalcOpen(false);
	};

	return (
		<div>
			<div className='flex items-center flex-1 gap-3 '>
				<span className='inline-block w-10 h-10 bg-white rounded-full p-2'>
					{item.category && <CategoryIcon category={item.category} />}
				</span>
				<div className='flex flex-col'>
					<h2 className='text-left text-lg text-white'>{item.name}</h2>
					<p className='text-white/70 text-sm '>{item.category?.id}</p>
				</div>
			</div>
			<main className='flex-1 space-y-6 my-6'>
				<ClickableContainer onClick={() => setIsCalcOpen(true)}>
					<BalanceLabel name={'Amount'} value={state?.amount || 0} />
				</ClickableContainer>

				<div>
					<ByLabel />
					<ForItem />
				</div>
			</main>
			{isCalcOpen && (
				<Modal>
					<NumPad onSubmit={handleSubmit} />
				</Modal>
			)}
		</div>
	);
}

export default ExpenseItemDetail;
