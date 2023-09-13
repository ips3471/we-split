import React from 'react';
import { Member } from '../../interfaces/global';
import CreateMemberList from '../create-member-list/create-member-list';
import ExclamationIcon from 'jsx:./assets/exclamation.svg';

type Props = {
	pageId: string;
	members: Member[];
	onRemove: (id: string) => void;
	onUpdate: (id: string, input: string) => void;
};

function CreateMembersContainer({
	onRemove,
	pageId,
	members,
	onUpdate,
}: Props) {
	if (pageId !== '2') return null;

	return (
		<ul>
			{members.length > 0 ? (
				members.map(member => (
					<CreateMemberList
						member={member}
						onRemove={onRemove}
						onUpdate={onUpdate}
						key={member.id}
					/>
				))
			) : (
				<p className='flex items-center justify-center'>
					<span className='w-6 h-6'>
						<ExclamationIcon />
					</span>
					멤버를 등록해주세요!
				</p>
			)}
		</ul>
	);
}

export default CreateMembersContainer;
