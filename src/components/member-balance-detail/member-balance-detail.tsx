import React from 'react';
import BalanceLabel from '../form-label/balance-label/balance-label';
import { Member } from '../../interfaces/global';
import ProfileHolder from 'jsx:./assets/profile-holder.svg';
import { useGroupStore } from '../../utils/store';

interface Props {
	member: Member;
}

function MemberBalanceDetail({ member }: Props) {
	const presenter = useGroupStore(state => state.balancePresenter);
	const balance = presenter?.getBalance(member.id);
	const payments = presenter?.getUserPaymentsById(member.id);

	return (
		<div className='w-full bg-slate-100 flex flex-col '>
			<header className='flex flex-col gap-4 bg-brand p-5'>
				<div className='flex items-center flex-1 gap-3 '>
					<div className='w-14 h-14'>
						<ProfileHolder />
					</div>
					<h2 className='text-left text-lg text-white'>{member.name}</h2>
				</div>
			</header>
			<main className='flex-1 space-y-6 my-6 '>
				<BalanceLabel name='Balance' value={balance || 0} />
				<div>
					<BalanceLabel name='Expenses' value={payments?.expenses || 0} />
					<BalanceLabel name='Payments' value={payments?.payments || 0} />
				</div>
			</main>
		</div>
	);
}

export default MemberBalanceDetail;
