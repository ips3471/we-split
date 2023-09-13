import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import App from './App';

describe('App', () => {
	it('page prop exists, redirect to Dashboard.', () => {
		const targetId = 'test';
		render(<App targetId={targetId} />);
		expect(window.location.pathname).toBe('/test');
	});

	it('page prop NOT exists, redirect to Intro.', () => {
		const targetId = undefined;
		render(<App targetId={targetId} />);
		expect(window.location.pathname).toBe('/intro');
	});
});
