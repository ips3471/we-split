import React, { ReactNode, useState } from 'react';
import DialogLayout from '../dialog-layout/dialog-layout';

interface Props {
	content: ReactNode;
	children: React.ReactNode;
	title: string;
	onSubmit: () => void;
}

function DialogContainer({ onSubmit, title, children, content }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div onClick={() => setIsOpen(true)}>{children}</div>
			{isOpen && (
				<DialogLayout
					title={title}
					onClose={() => setIsOpen(false)}
					onSubmit={() => {
						setIsOpen(false);
						onSubmit();
					}}
				>
					{content}
				</DialogLayout>
			)}
		</>
	);
}

export default DialogContainer;
