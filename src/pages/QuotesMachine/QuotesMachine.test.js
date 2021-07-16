import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, fireEvent } from '@testing-library/react';

import { QuotesMachine } from './QuotesMachine';


const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
	rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
		return res(ctx.json(reponse));
	})
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the QuotesApp, with a button, a quote and a image' ,() => {
	render(<QuotesMachine />);
	
	const buttonElemt = screen.getByRole('button');
	const imgElemt = screen.getByRole('img');
	//const textElemt = screen.findByText(/Loading author.../);
	
	expect(buttonElemt).toBeInTheDocument();
	expect(imgElemt).toBeInTheDocument();
	//expect(textElemt).toBeInTheDocument();
	
});

test('calls api on button click and update its text', async () => {
	render(<QuotesMachine />);
	
	const buttonElemt = screen.getByRole('button');
	
	fireEvent.click(buttonElemt);
	
	// findByText() é assíncrono
	const quoteElemt = await screen.findByText(response.quote);
	
	expect(buttonElemt).toBeInTheDocument();
});

test('calls api on startup and render it response', async () => {
	render(<QuotesMachine />)
	
	const quoteElemt = await screen.findByText(response.quote);
	
	expect(quoteElemt).toBeInTheDocument();
});



