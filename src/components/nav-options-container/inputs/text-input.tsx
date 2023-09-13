import React from 'react';
import { DialogInputProps } from '../../../interfaces/global';

function TextInput({ name, onChange, value }: DialogInputProps<'name'>) {
	return (
		<input
			autoFocus
			type='text'
			value={value}
			onChange={e => onChange(name, e.currentTarget.value)}
			spellCheck={false}
		/>
	);
}

export default TextInput;
