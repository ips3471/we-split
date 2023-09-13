import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

type Props = {
	onInputChange?: (input: string) => void;
	id: string;
	placeholder?: string;
	description: string;
	onSubmit: (input: string) => void;
	value?: string;
};

function CreateInputForm({
	onSubmit,
	description,
	id,
	onInputChange,
	placeholder,
	value,
}: Props) {
	const [text, setText] = useState<string>('');
	const inputRef = useRef<HTMLInputElement>(null);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.currentTarget.value;
		if (onInputChange) {
			onInputChange(value);
		} else {
			setText(value);
		}
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		text && setText('');
		onSubmit(text);
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={id}>{description}</label>
			<div>
				<input
					id={id}
					ref={inputRef}
					type='text'
					value={onInputChange ? value : text}
					onChange={handleChange}
					required
					placeholder={placeholder}
					autoComplete='off'
				/>
				{!onInputChange && (
					<button onClick={() => inputRef.current?.focus()} type='submit'>
						확인
					</button>
				)}
			</div>
		</form>
	);
}

export default CreateInputForm;
