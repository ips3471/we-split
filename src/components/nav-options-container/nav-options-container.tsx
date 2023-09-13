import React, { useEffect, useState } from 'react';
import Backdrop from '../backdrop/Backdrop';
import DialogContainer from '../dialog-container/dialog-container';
import StyledOptionText from './styled-option-text/styled-option-text';
import { useGroupStore, useGroupsStore } from '../../utils/store';
import { FormItem, GroupItem } from '../../interfaces/global';
import { useLocation } from 'wouter';
import TextInput from './inputs/text-input';
import PictureInput from './inputs/picture-input';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

function NavOptionsContainer({ isOpen, onClose }: Props) {
	const [location, setLocation] = useLocation();
	const onLeaved = useGroupsStore(state => state.onLeaved);
	const useGroupObjects = useGroupStore(state => ({
		groupData: state.currentGroup,
		onPictureAdded: state.onPictureAdded,
		onPictureRemoved: state.onPictureRemoved,
	}));
	const onUpdated = useGroupsStore(state => state.onUpdated);
	const { groupData, onPictureAdded, onPictureRemoved } = useGroupObjects;
	const [form, setForm] = useState<FormItem>({
		members: [],
		name: '',
		pictureURLs: [],
	});

	useEffect(() => {
		console.log('changed nav form data');

		groupData &&
			setForm({
				members: groupData.members,
				name: groupData.name,
				pictureURLs: groupData.pictureURLs,
			});
	}, [groupData]);

	if (!groupData) return null;

	const handleChange = <K extends keyof FormItem>(
		name: K,
		value: FormItem[K],
	) => {
		setForm(form => ({ ...form, [name]: value }));
	};

	const handleSubmit = () => {
		const { members, name, pictureURLs } = form;
		const updated: GroupItem = { ...groupData, members, name, pictureURLs };
		onUpdated(updated);
	};

	const handleLeave = () => {
		onLeaved(groupData.id);
		setLocation('/');
	};

	const navOptions = [
		{
			title: 'Change photo',
			content: (
				<PictureInput onChange={() => {}} name='pictureURLs' value={[]} />
			),
			button: <StyledOptionText text='Change photo' />,
		},
		{
			title: 'Change name',
			content: (
				<TextInput name='name' onChange={handleChange} value={form.name} />
			),
			button: <StyledOptionText text='Change name' />,
		},
		{
			title: 'Leave group',
			content: <p className='text-left'>{groupData.name} 그룹에서 나갈까요?</p>,
			button: <StyledOptionText text='Leave group' />,
			onSubmit: handleLeave,
		},
	];
	return (
		<>
			<section
				onClick={onClose}
				className={`${
					isOpen ? 'block' : 'hidden'
				} absolute z-30 shadow-xl top-1 text-left  right-1 bg-white text-black p-2`}
			>
				{navOptions.map((option, index) => (
					<DialogContainer
						key={index}
						title={option.title}
						content={option.content}
						onSubmit={option.onSubmit ? option.onSubmit : handleSubmit}
					>
						{option.button}
					</DialogContainer>
				))}
			</section>
			<Backdrop isOpen={isOpen} onClose={onClose} />
		</>
	);
}

export default NavOptionsContainer;
