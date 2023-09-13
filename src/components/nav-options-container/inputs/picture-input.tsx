import React from 'react';
import { DialogInputProps } from '../../../interfaces/global';

function PictureInput({
	name,
	onChange,
	value,
}: DialogInputProps<'pictureURLs'>) {
	function handleChange() {
		//...
		/* should capture image url and update it */
	}
	return (
		<input
			name={name}
			type='file'
			accept='image/*'
			onChange={handleChange}
			className='border-b border-b-orange-500 file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-brand/10 file:text-brand/80
                    '
			autoFocus
		/>
	);
}

export default PictureInput;
