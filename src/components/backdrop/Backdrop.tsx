import React from 'react';

type Props = {
	onClose: () => void;
	backdropColor?: string;
	isOpen: boolean;
};

function Backdrop({ onClose, backdropColor = 'transparent', isOpen }: Props) {
	return (
		<div
			onClick={onClose}
			className={`${
				isOpen ? 'w-screen opacity-100' : 'opacity-0 w-0'
			} transition-opacity duration-700 absolute z-20 left-0 top-0 h-full ${backdropColor}`}
		/>
	);
}

export default Backdrop;
