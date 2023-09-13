import { GroupItem } from '../interfaces/global';

export const groupItem: GroupItem = {
	id: 'test',
	name: 'title1',
	pictureURLs: '/assets/cover.jpg',
	members: [
		{
			id: 'admin',
			name: 'admin',
		},
		{ id: 'guest', name: 'guest' },
	],
	items: [
		{
			amount: 1,
			date: '20230101',
			by: 'admin',
			category: null,
			for: ['admin', 'guest'],
			id: 'expense1',
			name: 'expense1',
		},
		{
			amount: 2,
			date: '20230102',
			by: 'admin',
			category: {
				id: 'accomodation',
				imgPath: '/assets/accomodation.svg',
			},
			for: ['admin', 'guest'],
			id: 'expense2',
			name: 'expense2',
		},
		{
			amount: 3,
			date: '20230103',
			by: 'guest',
			category: {
				id: 'accomodation',
				imgPath: '/assets/accomodation.svg',
			},
			for: ['admin', 'guest'],
			id: 'expense3',
			name: 'expense3',
		},
		{
			amount: 4,
			date: '20230104',
			by: 'admin',
			category: {
				id: 'entertainment',
				imgPath: '/assets/entertainment.svg',
			},
			for: ['admin'],
			id: 'expense4',
			name: 'expense4',
		},
	],
};

export const groupItems: GroupItem[] = [
	{
		id: 'test1',
		name: 'title1',
		pictureURLs: '/assets/cover.jpg',
		members: [
			{
				id: 'admin',
				name: 'admin',
			},
			{ id: 'guest', name: 'guest' },
		],
		items: [
			{
				amount: 1000,
				date: '20230101',
				by: 'admin',
				category: {
					id: 'accomodation',
					imgPath: '/assets/accomodation.svg',
				},
				for: ['admin', 'guest'],
				id: 'expense1',
				name: 'expense1',
			},
			{
				amount: 10000,
				date: '20230102',
				by: 'guest',
				category: {
					id: 'entertainment',
					imgPath: '/assets/entertainment.svg',
				},
				for: ['guest'],
				id: 'expense2',
				name: 'expense2',
			},
		],
	},
	{
		pictureURLs: null,
		name: 'title2',
		id: 'test2',
		members: [
			{
				id: 'admin',
				name: '대승',
			},
		],
		items: [],
	},
];
