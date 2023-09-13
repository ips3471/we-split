import React from 'react';

type Props = {
	id: string;
};

function CreateInputHeader({ id }: Props) {
	return (
		<div className='rounded-full w-10 h-10 bg-orange-300 flex justify-center items-center p-4'>
			{id}
		</div>
	);
}

export default CreateInputHeader;
