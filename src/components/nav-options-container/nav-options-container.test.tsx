import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavOptionsContainer from './nav-options-container';
import '@testing-library/jest-dom';

describe('Nav Options Container', () => {
	const isOpen = true;

	it('renders leave group button', () => {
		render(<NavOptionsContainer onClose={jest.fn} isOpen={isOpen} />);
		const button = screen.getByRole('button', { name: 'Leave group' });
		expect(button).toBeInTheDocument();
	});

	it('renders update picture button', () => {
		render(<NavOptionsContainer onClose={jest.fn} isOpen={true} />);
		const button = screen.getByRole('button', { name: 'Change photo' });
		expect(button).toBeInTheDocument();
	});

	it('renders update title button', () => {
		render(<NavOptionsContainer onClose={jest.fn} isOpen={true} />);
		const button = screen.getByRole('button', { name: 'Change name' });
		expect(button).toBeInTheDocument();
	});
});
