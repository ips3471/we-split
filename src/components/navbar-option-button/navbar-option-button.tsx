import React from 'react';

type Props = {
	name: string;
	onClick: () => void;
};

function NavbarOptionButton({ name, onClick }: Props) {
	return (
		<button name={name} onClick={onClick}>
			{name}
		</button>
	);
}

export default NavbarOptionButton;
