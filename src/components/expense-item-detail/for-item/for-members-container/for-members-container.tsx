import React from 'react';
import ForMemberList from '../for-member-list/for-member-list';
import { useGroupStore } from '../../../../utils/store';

function ForMembersContainer() {
	const group = useGroupStore(state => state.currentGroup);
	return (
		<ul className={`items-center shadow-md bg-white  w-full text-sm`}>
			{group &&
				group.members.map(member => (
					<ForMemberList member={member} key={member.id} />
				))}
		</ul>
	);
}

export default ForMembersContainer;
