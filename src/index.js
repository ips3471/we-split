import { createRoot } from 'react-dom/client';
import App from './App';
import { Route, Switch } from 'wouter';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import React from 'react';
import Intro from './pages/Intro';

const container = window.document.getElementById('app');
// @ts-ignore
const root = createRoot(container);

root.render(
	<Switch>
		<Route path='/'>{() => <App />}</Route>
		<Route path='/intro' component={Intro} />
		<Route path='/create' component={Create} />
		<Route path='/:groupId' component={Dashboard} />
	</Switch>,
);
