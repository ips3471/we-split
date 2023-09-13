import React, { ReactNode } from 'react';
import MemberBalanceContainer from '../../member-balance-container/member-balance-container';
import { useGroupStore } from '../../../utils/store';
import LinkedSection from '../../linked-section/linked-section';
import LinkStyledLayout from '../../linked-section/link-styled-layout';
import TotalByCategory from '../../main-total-by-category/total-by-category';
import OverviewCardItem from '../card-item/card-item';

interface OverviewCard {
	children: ReactNode;
	link?: ReactNode;
	title: string;
}

function CardsContainer() {
	const group = useGroupStore(state => state.currentGroup);
	const cards: OverviewCard[] = [
		{
			title: '참여멤버',
			link: <MemberBalanceContainer />,
			children: (
				<>
					{group &&
						group.members.map(m => (
							<span key={m.id} className='p-2'>
								{m.name}
							</span>
						))}
				</>
			),
		},
		{
			title: '카테고리별 총 지출',
			children: <TotalByCategory />,
		},
	];
	return (
		<div className='relative text-left'>
			{cards.map((card, index) => (
				<LinkedSection key={index} link={card.link}>
					<LinkStyledLayout isLinked={!!card.link}>
						<OverviewCardItem title={card.title}>
							{card.children}
						</OverviewCardItem>
					</LinkStyledLayout>
				</LinkedSection>
			))}
		</div>
	);
}

export default CardsContainer;
