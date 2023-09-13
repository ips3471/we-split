import React from 'react';
import AddIcon from 'jsx:./assets/plus.svg';
import Backdrop from '../backdrop/Backdrop';
import { useGroupsStore } from '../../utils/store';
import { Link } from 'wouter';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

function ConsoleBar({ isOpen, onClose }: Props) {
	const groups = useGroupsStore(state => state.groups);

	const handleClose = () => {
		if (isOpen) onClose();
	};
	return (
		<>
			<div
				data-testid='consolebar-element'
				className={`h-full border flex z-40 flex-col w-2/3 transition-all duration-300 fixed ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} left-0 top-0 `}
			>
				<section className='flex-1 basis-1/3 text-white bg-orange-500'>
					<h1 className='text-4xl p-6'>Groups</h1>
					<nav>
						{groups.map(list => (
							<Link
								onClick={handleClose}
								className={`block bg-brand/80 w-full`}
								key={list.id}
								to={list.id}
							>
								{list.name}
							</Link>
						))}
					</nav>
				</section>

				<section className='bg-white p-4 flex-shrink basis-2/3 relative'>
					<a
						href='./create'
						className='absolute right-4 top-0 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg'
					>
						<AddIcon />
					</a>

					<nav className='space-y-6 mt-4 text-black'>
						<a>Feedback</a>
						<a>About We-Account</a>
					</nav>
				</section>
			</div>
			<Backdrop
				isOpen={isOpen}
				onClose={handleClose}
				backdropColor='bg-black/50'
			/>
		</>
	);
}

export default ConsoleBar;
