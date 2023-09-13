import React, { ReactNode, useState } from 'react';
import FullPageLayout from '../full-page-layout/full-page-layout';

type Props = {
	link?: ReactNode;
	children: ReactNode;
};

function LinkedSection({ children, link }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	function handleOpen() {
		link && setIsOpen(true);
	}
	return (
		<>
			<section className='relative z-10' onClick={handleOpen}>
				{children}
			</section>
			{isOpen && (
				<FullPageLayout onClose={() => setIsOpen(false)}>{link}</FullPageLayout>
			)}
		</>
	);
}

export default LinkedSection;
