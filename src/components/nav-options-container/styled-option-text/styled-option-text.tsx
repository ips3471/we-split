import React from 'react';

type Props = {
	text: string;
};

function StyledOptionText({ text }: Props) {
	return <div className='p-2'>{text}</div>;
}

export default StyledOptionText;
