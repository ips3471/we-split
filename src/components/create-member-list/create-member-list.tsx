import { Member } from '../../interfaces/global';
import React, { useRef, useState } from 'react';

type Props = {
	member: Member;
	onRemove: (id: string) => void;
	onUpdate: (id: string, input: string) => void;
};

function CreateMemberList({ member, onRemove, onUpdate }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [updateMode, setUpdateMode] = useState(false);

	return (
		<li key={member.id} className='flex justify-between'>
			<input
				ref={inputRef}
				onBlur={() => setUpdateMode(false)}
				readOnly={!updateMode}
				onChange={e => onUpdate(member.id, e.currentTarget.value)}
				type='text'
				value={member.name}
			/>
			<button
				onClick={() => {
					setUpdateMode(true);
					inputRef.current?.focus();
				}}
				className='p-2 border text-xs rounded-md'
			>
				변경
			</button>
			<button
				onClick={() => onRemove(member.id)}
				className='p-2 border text-xs rounded-md'
			>
				삭제
			</button>
		</li>
	);
}

export default CreateMemberList;
