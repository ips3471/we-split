import React from 'react';
import ArrowIcon from 'jsx:./assets/arrow-left.svg';
import Modal from '../modal/Modal';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
	onSubmit?: {
		name: string;
		callback: () => void;
	};
}

function FullPageLayout({ children, onClose, onSubmit }: Props) {
	return (
		<Modal>
			<div className='w-screen flex z-40 relative flex-col h-screen overflow-x-hidden bg-slate-200 '>
				<nav className='flex justify-between h-16 items-centers w-screen  '>
					<button className='w-14 p-4 h-full' onClick={onClose}>
						<ArrowIcon />
					</button>
					{onSubmit && (
						<button onClick={onSubmit.callback} className='text-white p-4'>
							{onSubmit.name}
						</button>
					)}
				</nav>
				<main className='flex-1'>{children}</main>
			</div>
		</Modal>
	);
}

export default FullPageLayout;
