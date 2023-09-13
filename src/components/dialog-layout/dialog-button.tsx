import React from 'react';

type Props = {
	onClick: () => void;
	text: string;
};

function DialogButton({ onClick, text }: Props) {
	return (
		<button className='p-4' onClick={onClick}>
			{text}
		</button>
	);
}

export default DialogButton;
