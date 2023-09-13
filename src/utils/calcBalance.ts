import {
	Expense,
	GroupItem,
	Member,
	MemberBalance,
} from '../interfaces/global';

export class CalcBalance {
	readonly items;
	readonly members: Member[];
	private memberBalances: MemberBalance[];
	constructor(group: GroupItem) {
		this.members = group.members;
		this.items = group.items;
		this.memberBalances = group.members.map(member => ({
			...member,
			expenses: 0,
			payments: 0,
		}));
	}

	private filterTargets(
		targetId: string,
		filterName: keyof Pick<Expense, 'for' | 'by'>,
	) {
		if (this.items.length < 1) return [];
		return this.items.filter(expense => expense[filterName].includes(targetId));
	}

	private paymentReducer = (memberContainer: MemberBalance) => {
		const filtered = this.filterTargets(memberContainer.id, 'by');

		return filtered.reduce((container: MemberBalance, current: Expense) => {
			const value = current.amount;
			return {
				...container,
				payments: container.payments + value,
			};
		}, memberContainer);
	};

	private expenseReducer = (memberContainer: MemberBalance) => {
		const filtered = this.filterTargets(memberContainer.id, 'for');

		return filtered.reduce((container: MemberBalance, current: Expense) => {
			const value = current.amount / current.for.length;
			return {
				...container,
				expenses: container.expenses + value,
			};
		}, memberContainer);
	};

	private findMember = (id: string) => {
		const found = this.memberBalances.find(m => m.id === id);

		if (!found) throw new Error('Member Not Found');
		return found;
	};

	private getDifference = (id: string) => {
		const target = this.findMember(id);

		return target.payments - target.expenses;
	};

	get getMajor() {
		return this.memberBalances.reduce((major, memberBalance) => {
			return this.getDifference(memberBalance.id) > this.getDifference(major.id)
				? memberBalance
				: major;
		}, this.memberBalances[0]);
	}

	getMembers() {
		return this.members;
	}

	getFrom(id: string): string {
		return this.getDifference(id) > 0
			? this.getMajor.name
			: this.findMember(id).name;
	}

	getTo(id: string): string {
		return this.getDifference(id) < 0
			? this.getMajor.name
			: this.findMember(id).name;
	}

	getUserPaymentsById(id: string) {
		const found = this.memberBalances.find(item => item.id === id);
		if (!found) throw new Error('Member Not Found');
		return found;
	}

	getBalance = (id: string): number => {
		return Math.abs(this.getDifference(id));
	};

	tobeRewarded = (id: string): boolean => {
		return this.getDifference(id) > 0;
	};

	init() {
		const updated = this.memberBalances
			.map(this.expenseReducer)
			.map(this.paymentReducer);
		this.memberBalances = updated;
	}
}
