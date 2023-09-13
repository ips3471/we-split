import React from 'react';
import { Redirect } from 'wouter';

export default function App() {
	const initPage = localStorage.getItem('page');

	return <Redirect to={initPage ? `/${initPage}` : '/intro'} />;
}
