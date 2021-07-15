import { render, screen } from '@testing-library/react';

import { QuotesMachine } from './QuotesMachine';



test('renders the QuotesApp, with a button, a quote and a image' ,() => {
	render(<QuotesMachine />);
	
	const buttonElemt = screen.getByRole('button');
	const imgElemt = screen.getByRole('img');
	const textElemt = screen.findByText(/Speaker/);
	
	expect(buttonElemt).toBeInTheDocument();
	expect(imgElemt).toBeInTheDocument();
	expect(textElemt).toBeInTheDocument();
	
});







