import { groupItem } from '../fixtures/fixtures';
import { GroupItem } from '../interfaces/global';
import categoryTotalMap from './categoryTotalMap';

describe('Category Total Map', () => {
	const mockGroup: GroupItem = groupItem;
	it('should return sums of categoris', () => {
		const mockCategoryId = 'accomodation';
		const result = categoryTotalMap(mockGroup);
		const categoryObj = result.find(item => item.id === mockCategoryId);
		expect(categoryObj?.total).toBe(5);
	});

	it('treats unknown category-name as null', () => {
		const mockCategoryId = 'none';
		const result = categoryTotalMap(mockGroup);
		const categoryObj = result.find(item => item.id === mockCategoryId);
		expect(categoryObj?.total).toBe(1);
		expect(categoryObj?.name).toBe('null');
	});
});
