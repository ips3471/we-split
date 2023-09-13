import React from 'react';
import Modal from '../modal/Modal';
import DialogButton from './dialog-button';

type Props = {
	children: React.ReactNode;
	onClose: () => void;
	onSubmit: () => void;
	title: string;
};

function DialogLayout({ title, children, onClose, onSubmit }: Props) {
	return (
		<Modal>
			<div className='bg-white p-5 shadow-lg w-[90%] space-y-10'>
				<h2 className='text-left text-2xl'>{title}</h2>
				<main>{children}</main>
				<div className='flex justify-around text-right space-x-10 text-orange-500'>
					<DialogButton onClick={onClose} text='Cancel' />
					<DialogButton onClick={onSubmit} text='OK' />
				</div>
			</div>
		</Modal>
	);
}

export default DialogLayout;
