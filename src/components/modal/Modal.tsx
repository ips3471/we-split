import ReactDom from 'react-dom';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export function Background({ children }: Props) {
	return (
		<div className='z-30 backdrop-brightness-90 fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center text-center'>
			{children}
		</div>
	);
}

const Modal = ({ children }: Props) => {
	const root = document.getElementById('modal-root') as HTMLElement;

	return ReactDom.createPortal(<Background>{children}</Background>, root);
};

export default Modal;
