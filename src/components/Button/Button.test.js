import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';



test('renders button with text', () => {
	render(<Button>Test</Button>);
	
	const buttonElemt = screen.getByText('Test');
	
	expect(buttonElemt).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
	const callback = jest.fn();
	
	render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />);
	
	const buttonElemt = screen.getByRole('button');
	
	fireEvent(buttonElemt);
	
	expect(callback).toHaveBeenCalledTimes(1);
});



