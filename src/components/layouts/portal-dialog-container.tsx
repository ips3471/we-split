import React, { FormEvent, ReactNode, useState } from 'react';
import Modal from '../modal/Modal';

type Props = {
	children: ReactNode;
	onSubmit: () => void;
	title: string;
};

function PortalDialogContainer({ children, onSubmit, title }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	function toggleDialog() {
		setIsOpen(!isOpen);
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		onSubmit();
		toggleDialog();
	}

	// dialog를 엘레멘트로 받아서 onClick시 하도록 함
	return (
		<>
			{isOpen && (
				<Modal>
					<form onSubmit={handleSubmit} className='form-dialog'>
						<h2 className='text-left text-2xl'>{title}</h2>

						{children}

						<div className='text-right space-x-10 text-orange-500'>
							<button type='button' onClick={toggleDialog} className='p-4'>
								CANCEL
							</button>
							<button type='submit' className='p-4'>
								OK
							</button>
						</div>
					</form>
				</Modal>
			)}
		</>
	);
}

export default PortalDialogContainer;
