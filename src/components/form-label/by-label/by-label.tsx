import React from 'react';
import Label from '../label';
import { useExpenseFormStore, useGroupStore } from '../../../utils/store';

function ByLabel() {
	const group = useGroupStore(state => state.currentGroup);
	const useFormObj = useExpenseFormStore(state => ({
		state: state.currentExpense,
		onChanged: state.onByChanged,
	}));

	const { state, onChanged } = useFormObj;

	return (
		<Label name='By'>
			<select
				value={state?.by}
				onChange={e => onChanged(e.currentTarget.value)}
				className='px-4 outline-none'
			>
				{group &&
					group.members.map(member => (
						<option key={member.id} value={member.id}>
							{member.name}
						</option>
					))}
			</select>
		</Label>
	);
}

export default ByLabel;
