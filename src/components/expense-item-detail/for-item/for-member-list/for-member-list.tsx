import React from 'react';
import { Member } from '../../../../interfaces/global';
import { useExpenseFormStore } from '../../../../utils/store';

type Props = {
	member: Member;
};

function ForMemberList({ member }: Props) {
	const useFormObj = useExpenseFormStore(state => ({
		state: state.currentExpense,
		onChanged: state.onForChanged,
	}));

	const { onChanged, state } = useFormObj;

	const isActive = state?.for.includes(member.id);

	return (
		<li className='w-full '>
			<div className='flex items-center pl-3'>
				<input
					checked={isActive}
					type='checkbox'
					id={member.id}
					onChange={() => onChanged(member.id)}
					className='w-4 h-4 rounded focus:ring-brand focus:ring-2 '
				/>
				<label
					htmlFor={member.id}
					className='w-full py-3 ml-2 text-sm font-medium '
				>
					{member.name}
				</label>
			</div>
		</li>
	);
}

export default ForMemberList;
