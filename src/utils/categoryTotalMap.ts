import { CategoryId, GroupItem } from '../interfaces/global';

type CategoryNames = { [key in CategoryId]: string };

const categoryNames: CategoryNames = {
	accomodation: '숙박',
	entertainment: '오락',
	groceries: '마트',
	none: 'null',
	restaurants: '식당',
	transport: '차량',
};

export default function categoryTotalMap(group: GroupItem) {
	const categories = group.items.map(item => item.category);
	const categorySet = Array.from(new Set(categories));

	const mapped = categorySet.map(category => {
		const categoryId = category?.id || 'none';
		return {
			id: categoryId,
			name: categoryNames[categoryId],
			total: group.items.reduce((acc, curr) => {
				const currId = curr?.category?.id || 'none';
				const amount = categoryId === currId ? curr.amount : 0;
				return acc + amount;
			}, 0),
		};
	});

	return mapped;
}
