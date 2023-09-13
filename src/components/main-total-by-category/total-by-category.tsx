import React from 'react';
import { useGroupStore } from '../../utils/store';
import categoryTotalMap from '../../utils/categoryTotalMap';

function TotalByCategory() {
	const group = useGroupStore(state => state.currentGroup);
	if (!group) return null;

	const categoryMap = categoryTotalMap(group);

	return (
		<div className='flex flex-wrap gap-3'>
			{categoryMap.map((category, index) => (
				<dl
					key={index}
					className='text-center odd:translate-y-3 bg-red-100 flex flex-col items-center justify-center p-4 rounded-full w-20 h-20'
				>
					<dt>{category.name}</dt>
					<dd>{category.total}</dd>
				</dl>
			))}
		</div>
	);
}

export default TotalByCategory;
