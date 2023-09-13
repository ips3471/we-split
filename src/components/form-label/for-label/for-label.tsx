import React from 'react';
import Label from '../label';
import { useExpenseFormStore } from '../../../utils/store';

function ForLabel() {
	const form = useExpenseFormStore(state => state.currentExpense);

	return (
		<Label name='For'>
			<span>{form?.for.length} Persons</span>
		</Label>
	);
}

export default ForLabel;
