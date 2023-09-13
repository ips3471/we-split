import React, { RefObject, useEffect, useRef, useState } from 'react';
import CreateInputForm from '../components/create-input-form/create-input-form';
import CreateInputHeader from '../components/create-input-header/create-input-header';
import Slider from '../components/slider/slider';
import CreateNav from '../components/create-nav/create-nav';
import CreateMembersContainer from '../components/create-members-container/create-members-container';
import { useCreateStore, useGroupsStore } from '../utils/store';
import { useLocation } from 'wouter';
interface Props {}

function Create({}: Props) {
	const [page, setPage] = useState(0);
	const titleRef = useRef<HTMLElement>(null);
	const membersRef = useRef<HTMLElement>(null);
	const sliderRef = useRef<HTMLDivElement>(null);
	const [location, setLocation] = useLocation();

	const onCreated = useGroupsStore(state => state.onCreated);
	const useCreateObjects = useCreateStore(state => ({
		formData: state.formData,
		onAddMember: state.onAddMember,
		onRemoveMember: state.onRemoveMember,
		onUpdateMember: state.onUpdateMember,
		onUpdateName: state.onUpdateName,
	}));
	const {
		formData,
		onAddMember,
		onRemoveMember,
		onUpdateMember,
		onUpdateName,
	} = useCreateObjects;

	const pages = [
		{
			id: '1',
			nextName: 'Next',
			description: '그룹의 이름을 입력하세요',
			prevFunc: onExit,
			nextFunc: onMoveNext,
			onInputChange: onUpdateName,
			onSubmit: onMoveNext,
			ref: titleRef,
		},
		{
			id: '2',
			nextName: 'Create',
			description: '멤버의 이름을 입력하세요',
			prevFunc: onMoveBack,
			nextFunc: handleCreate,
			onSubmit: onAddMember,
			ref: membersRef,
		},
	];

	function scrollTo(targetRef: RefObject<HTMLElement>) {
		sliderRef.current?.scrollTo({
			left: targetRef.current?.getBoundingClientRect().left,
			top: 0,
			behavior: 'smooth',
		});
	}

	useEffect(() => {
		scrollTo(pages[page].ref);
	}, [page]);

	function onExit() {
		window.history.back();
	}
	function onMoveBack() {
		setPage(state => (state > 0 ? state - 1 : state));
	}
	function onMoveNext() {
		setPage(state => (state < pages.length - 1 ? state + 1 : state));
	}
	function handleCreate() {
		if (!formData.name) {
			return console.log('그룹이름을 입력하세요');
		}
		if (formData.members.length === 0) {
			return console.log('그룹멤버가 존재하지 않습니다');
		}

		onCreated(formData);
		setLocation('/');
	}

	const pageId = String(page + 1);

	useEffect(() => {
		const formRef = document.getElementById(pageId);
		formRef &&
			setTimeout(() => {
				formRef.focus();
			}, 550);
	}, [page]);

	const sliderPages = pages.map(page => {
		return {
			ref: page.ref,
			element: (
				<div key={page.id}>
					<CreateInputHeader id={page.id} />
					<CreateInputForm
						onInputChange={page.onInputChange}
						onSubmit={page.onSubmit}
						description={page.description}
						id={page.id}
					/>
					<CreateMembersContainer
						onUpdate={onUpdateMember}
						onRemove={onRemoveMember}
						pageId={page.id}
						members={formData.members}
					/>
				</div>
			),
		};
	});

	return (
		<div>
			<CreateNav
				nameForNext={pages[page].nextName}
				onNext={pages[page].nextFunc}
				onPrev={pages[page].prevFunc}
			/>

			<Slider containerRef={sliderRef} pages={sliderPages} />
		</div>
	);
}

export default Create;
