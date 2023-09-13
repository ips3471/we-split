import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavbarOptionButton from './navbar-option-button';

describe('NavbarOptionButton', () => {
	let mockOnClick: any;
	let name: string;
	beforeEach(() => {
		mockOnClick = jest.fn();
		name = 'Test Button';
		render(<NavbarOptionButton name={name} onClick={mockOnClick} />);
	});

	it('should render correctly with the provided name', () => {
		expect(screen.getByRole('button').textContent).toBe(name);
	});

	it('should call the onClick function when the button is clicked', () => {
		fireEvent.click(screen.getByRole('button'));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
});
