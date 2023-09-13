import React from 'react';
import BalanceLabelButton from '../member-balance-button/member-balance-button';
import MemberBalanceDetail from '../member-balance-detail/member-balance-detail';
import { useGroupStore } from '../../utils/store';

function MemberBalanceContainer() {
	const useGroupObjects = useGroupStore(state => ({
		group: state.currentGroup,
		presenter: state.balancePresenter,
	}));
	const { group } = useGroupObjects;

	return (
		<ul>
			{group &&
				group.members.map(member => (
					<BalanceLabelButton
						member={member}
						key={member.id}
						linkFor={<MemberBalanceDetail member={member} />}
					/>
				))}
		</ul>
	);
}

export default MemberBalanceContainer;
