import React, { ReactNode } from 'react';
import MoreIcon from 'jsx:./assets/more.svg';

type Props = {
	children: ReactNode;
	isLinked: boolean;
};

function LinkStyledLayout({ children, isLinked }: Props) {
	return (
		<>
			<div className='m-4 p-2 relative bg-white rounded-lg'>
				{isLinked && (
					<span className='w-4 h-4 opacity-70 absolute top-2 right-2'>
						<MoreIcon />
					</span>
				)}
				{children}
			</div>
		</>
	);
}

export default LinkStyledLayout;
