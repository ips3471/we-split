import React, { ReactNode } from 'react';

type Props = {
	id?: string;
	icon: ReactNode;
	onClick: () => void;
};

function NavbarButton({ icon, onClick, id }: Props) {
	return (
		<button
			id={id + 'Btn'}
			className='noButtonHighlight w-6 h-6'
			onClick={onClick}
		>
			{icon}
		</button>
	);
}

export default NavbarButton;
