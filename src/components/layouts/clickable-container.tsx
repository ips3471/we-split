import React, { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	onClick: () => void;
};

function ClickableContainer({ children, onClick }: Props) {
	return <div onClick={onClick}>{children}</div>;
}

export default ClickableContainer;
