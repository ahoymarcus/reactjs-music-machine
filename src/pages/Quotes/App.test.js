import { render, screen } from '@testing-library';
import { QuotesApp } from './Quotes';



test('renders the app') ,() => {
	render(<QuotesApp />);
	
	const text = screen.getByText(/Hello/i);
	
	expect(text).toBeInTheDocument();
});







