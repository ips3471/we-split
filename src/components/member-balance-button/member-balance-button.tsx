import React, { ReactNode } from 'react';
import BalanceLabel from '../form-label/balance-label/balance-label';
import LinkedSection from '../linked-section/linked-section';
import { Member } from '../../interfaces/global';
import { useGroupStore } from '../../utils/store';

type Props = {
	linkFor?: ReactNode;
	member: Member;
};

function BalanceLabelButton({ linkFor, member }: Props) {
	const presenter = useGroupStore(state => state.balancePresenter);
	const value = presenter?.getBalance(member.id);
	return (
		<LinkedSection link={linkFor}>
			<BalanceLabel name={member.name} value={value || 0} />
		</LinkedSection>
	);
}

export default BalanceLabelButton;
