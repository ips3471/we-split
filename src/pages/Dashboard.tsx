import React, { useEffect } from 'react';
import { GroupItem } from '../interfaces/global';
import Navbar from '../components/navbar/navbar';
import { useLocation } from 'wouter';
import MainBody from '../components/main/main-body';
import AddGroupButton from '../components/add-group-button/add-group-button';
import { useGroupStore, useGroupsStore } from '../utils/store';

interface Props {}

function Dashboard({}: Props) {
	const groups = useGroupsStore<GroupItem[]>(state => state.groups);
	const onGroupChanged = useGroupStore(state => state.onGroupChanged);
	const [location, setLocation] = useLocation();
	const currentGroupChanged = useGroupStore(state => state.onGroupChanged);

	useEffect(() => {
		const slug = location.replace('/', '');
		/* const slug = location.replace('/', '');
		if (slug === '') {
			setLocation(groups[groups.length - 1].id);
		}
		const currentGroup = groups.find(g => g.id === slug);
		console.log(currentGroup);

		currentGroup && currentGroupChanged(currentGroup); */
		const found = groups.find(g => g.id === slug);
		if (!found) console.error('not found matches current location');
		found && onGroupChanged(found);
	}, [location]);

	return (
		<>
			<div id='modal-root'></div>
			<div data-testid='dashboard' className='h-screen flex flex-col '>
				<Navbar />
				<MainBody />
				<AddGroupButton />
			</div>
		</>
	);
}

export default Dashboard;
