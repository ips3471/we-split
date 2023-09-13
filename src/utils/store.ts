import { Category, GroupId, MemberId } from './../interfaces/global.d';
import { create } from 'zustand';
import { Expense, GroupItem } from '../interfaces/global';
import { groupItems } from '../fixtures/fixtures';
import { immer } from 'zustand/middleware/immer';
import { CalcBalance } from './calcBalance';
import { v4 as uuid } from 'uuid';
import { produce } from 'immer';

interface GroupsData {
	groups: GroupItem[];
	onUpdated: (item: GroupItem) => void;
	onCreated: (item: Pick<GroupItem, 'name' | 'members'>) => void;
	onLeaved: (id: GroupId) => void;
}

interface GroupData {
	currentGroup: GroupItem | null;
	balancePresenter: CalcBalance | null;
	categorySet: (Category | null)[] | null;
	onGroupChanged: (group: GroupItem) => void;
	onPictureAdded: (url: string) => void;
	onPictureRemoved: (target: string) => void;
}

interface ExpenseData {
	currentExpense: Expense | null;
	onForChanged: (taragetId: MemberId) => void;
	onAmountChanged: (amount: number) => void;
	onByChanged: (taragetId: MemberId) => void;
	onExpenseChanged: (expense: Expense) => void;
}

interface CreateData {
	formData: Pick<GroupItem, 'name' | 'members'>;
	onAddMember: (input: string) => void;
	onRemoveMember: (id: string) => void;
	onUpdateMember: (id: string, input: string) => void;
	onUpdateName: (input: string) => void;
}

export const useGroupsStore = create(
	immer<GroupsData>(set => ({
		groups: groupItems,
		onUpdated: item => {
			set(state => {
				const updated = state.groups.map(group =>
					group.id === item.id ? item : group,
				);
				state.groups = updated;
			});
		},
		onLeaved: id => {
			set(state => {
				const removedIndex = state.groups.findIndex(g => g.id === id);
				if (removedIndex < 0) throw new Error('not found group item');

				const nextIndex = removedIndex === 0 ? 1 : removedIndex - 1;
				const nextPage = state.groups[nextIndex];

				state.groups.splice(removedIndex, 1);

				nextPage
					? localStorage.setItem('page', nextPage.id)
					: localStorage.removeItem('page');
			});
		},
		onCreated: form => {
			const id = uuid();
			set(state => {
				const groupData: GroupItem = {
					id,
					items: [],
					members: form.members,
					name: form.name,
					pictureURLs: [],
				};
				const added: GroupItem[] = [...state.groups, groupData];
				state.groups = added;
				localStorage.setItem('page', groupData.id);
			});
		},
	})),
);

export const useGroupStore = create(
	immer<GroupData>(set => ({
		currentGroup: null,
		balancePresenter: null,
		categorySet: null,
		onGroupChanged: (group: GroupItem) => {
			const presenter = new CalcBalance(group);
			const category = Array.from(new Set(group.items.map(i => i.category)));
			presenter.init();
			set({
				currentGroup: group,
				balancePresenter: presenter,
				categorySet: category,
			});
		},

		onPictureAdded: (url: string) => {
			set(state => {
				if (state.currentGroup) {
					const added = [...state.currentGroup.pictureURLs, url];
					state.currentGroup.pictureURLs = added;
				}
			});
		},
		onPictureRemoved: (target: string) => {
			set(state => {
				if (state.currentGroup) {
					const removed = state.currentGroup.pictureURLs.filter(
						url => url !== target,
					);
					state.currentGroup.pictureURLs = removed;
				}
			});
		},
	})),
);

export const useExpenseFormStore = create(
	immer<ExpenseData>(set => ({
		currentExpense: null,
		onForChanged: (targetId: MemberId) =>
			set(state => {
				if (state.currentExpense) {
					const fors = state.currentExpense.for;
					const isChecked = fors.includes(targetId);

					if (isChecked) {
						const filtered = fors.filter(
							(forId: MemberId) => forId !== targetId,
						);
						state.currentExpense.for = filtered;
					} else {
						const added = [...fors, targetId];
						state.currentExpense.for = added;
					}
				}
			}),
		onAmountChanged: (amount: number) =>
			set(state => {
				if (state.currentExpense) {
					state.currentExpense.amount = amount;
				}
			}),
		onExpenseChanged: (expense: Expense) => set({ currentExpense: expense }),
		onByChanged: (targetId: MemberId) =>
			set(state => {
				if (state.currentExpense) {
					state.currentExpense.by = targetId;
				}
			}),
	})),
);

export const useCreateStore = create(
	immer<CreateData>(set => ({
		formData: { members: [], name: '' },
		onUpdateName: (input: string) =>
			set(state => {
				state.formData.name = input;
			}),
		onAddMember: (input: string) =>
			set(state => {
				const id = uuid();
				const updated = [...state.formData.members, { name: input, id }];
				state.formData.members = updated;
			}),
		onRemoveMember: (id: string) =>
			set(state => {
				const updated = state.formData.members.filter(m => m.id !== id);
				state.formData.members = updated;
			}),
		onUpdateMember: (id: string, input: string) =>
			set(state => {
				const updated = state.formData.members.map(m =>
					m.id === id ? { id, name: input } : m,
				);
				state.formData.members = updated;
			}),
	})),
);
