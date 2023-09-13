import React from 'react';

type Props = {};

function CreateBody({}: Props) {
	return (
		<main className={`relative h-full flex overflow-x-clip`}>
			{/* <AddTitleForm isActive={pageIndex === 0} /> */}
			{/* <AddMemberForm isActive={pageIndex === 1} /> */}
		</main>
	);
}

export default CreateBody;
