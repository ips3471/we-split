import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

function SlideLayout({ children }: Props) {
	return (
		<div>
			<div className='w-screen snap-start'>{children}</div>
		</div>
	);
}

export default SlideLayout;
