import React, { useEffect, useState } from 'react';
import ConsoleIcon from 'jsx:./assets/hamburger.svg';
import EditIcon from 'jsx:./assets/ellipsis-vertical.svg';
import NavbarButton from '../navbar-button/navbar-button';
import ConsoleBar from '../sidebar/sidebar';
import { GroupItem } from '../../interfaces/global';
import NavOptionsContainer from '../nav-options-container/nav-options-container';
import { useGroupStore } from '../../utils/store';

type Props = {
	groups: GroupItem[];
	title: string;
};

function Navbar() {
	const group = useGroupStore(state => state.currentGroup);
	const [title, setTitle] = useState<string>();
	const [open, setOpen] = useState<'consolebar' | 'options' | null>(null);

	useEffect(() => {
		setTitle(group?.name);
	}, [group]);

	const handleOpen = (target: 'consolebar' | 'options') => setOpen(target);
	const handleClose = () => setOpen(null);

	return (
		<div className='bg-[#f39d11] p-4 flex justify-between items-center'>
			<>
				<NavbarButton
					onClick={() => handleOpen('consolebar')}
					icon={<ConsoleIcon />}
				/>
				<ConsoleBar onClose={handleClose} isOpen={open === 'consolebar'} />
			</>
			<h1 className='text-white'>{title}</h1>
			<>
				<NavbarButton
					onClick={() => handleOpen('options')}
					icon={<EditIcon />}
				/>
				<NavOptionsContainer
					onClose={handleClose}
					isOpen={open === 'options'}
				/>
			</>
		</div>
	);
}

export default Navbar;
