import React from 'react';
import AddIcon from 'jsx:./assets/plus.svg';
import { Link } from 'wouter';

type Props = {};

function AddGroupButton({}: Props) {
	return (
		<Link href='/create' className='disableToSelect h-5 w-5 '>
			<div className='w-16 h-16 shadow-lg rounded-full bg-brand fixed p-2 right-5 bottom-5'>
				<AddIcon />
			</div>
		</Link>
	);
}

export default AddGroupButton;
