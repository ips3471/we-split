import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavbarButton from './navbar-button';

describe('Navbar Button Component', () => {
	beforeEach(() => {
		const mockOnClick = jest.fn();
		render(<NavbarButton id='test' icon={<></>} onClick={mockOnClick} />);
	});

	it('renders button element', () => {
		const button = screen.getByRole('button');
		expect(button.id).toBe('testBtn');
	});
});
