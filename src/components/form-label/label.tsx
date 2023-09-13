import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	name: string;
};

function Label({ children, name }: Props) {
	return (
		<dl className='bg-white shadow-sm border-b flex justify-between p-4'>
			<dt>{name}</dt>
			<dd>{children}</dd>
		</dl>
	);
}

export default Label;
