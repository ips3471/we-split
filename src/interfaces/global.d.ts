export type GroupId = string;
export type GroupItem = {
	id: string;
	name: string;
	members: Member[];
	items: Expense[];
	pictureURLs: string[];
};
export type FormItem = Pick<GroupItem, 'name' | 'pictureURLs' | 'members'>;

export type FormChangeHandler<K extends keyof FormItem> = (
	name: K,
	value: FormItem[K],
) => void;

export type Member = {
	id: MemberId;
	name: string;
};
export type DialogInputProps<K extends keyof FormItem> = {
	onChange: (name: K, value: FormItem[K]) => void;
	value: FormItem[K];
	name: K;
};
export type CategoryId =
	| 'accomodation'
	| 'entertainment'
	| 'groceries'
	| 'restaurants'
	| 'transport'
	| 'none';
export type MemberId = string;
export type Category = {
	id: CategoryId;
	imgPath: string;
};
export type Expense = {
	id: string;
	date: string;
	name: string;
	amount: number;
	by: MemberId;
	for: MemberId[];
	category: Category | null;
};
export type ImageData = {
	url: string;
};
export type MemberBalance = Member & {
	expenses: number;
	payments: number;
};
