import React from 'react';
import { useGroupStore } from '../utils/store';
import CategoryIcon from '../components/icons/category-icon/category-icon';
import LinkedSection from '../components/linked-section/linked-section';
import ExpenseItemList from './expense-item-list/expense-item-list';
import ExpenseItemDetail from '../components/expense-item-detail/expense-item-detail';

type Props = {
	isFocused: boolean;
};

function Expenses({ isFocused }: Props) {
	const useGroupObj = useGroupStore(state => ({
		group: state.currentGroup,
		categorySet: state.categorySet,
	}));

	const { group, categorySet } = useGroupObj;

	return (
		<div>
			{categorySet &&
				categorySet.map((category, index) => {
					return (
						<div key={index} className=' mb-8'>
							<h2
								className={`w-16 h-16 bg-white relative -bottom-3 transition-transform ease-out duration-700 ${
									isFocused ? '-translate-x-2' : 'translate-x-0'
								}  border p-3  rounded-full`}
							>
								{category && <CategoryIcon category={category} />}
							</h2>
							<ul className='border-l-[6px]  shadow-sm'>
								{group?.items
									.filter(item => item.category === category)
									.map(expense => (
										<LinkedSection
											key={expense.id}
											link={<ExpenseItemDetail item={expense} />}
										>
											<ExpenseItemList item={expense} />
										</LinkedSection>
									))}
							</ul>
						</div>
					);
				})}
		</div>
	);
}

export default Expenses;
