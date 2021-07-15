import styled from 'styled-components';
import { string } from 'prop-types';

import { Button } from '../../components';



const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Quote = styled.p`
	font-size: 2em;
	margin: 0;
`;

const Speaker = styled(Quote)`
	text-align: right;
	margin-bottom: 50px;
`;


export const Quotes = ({ quote, speaker }) => {
	
	return (
		<Wrapper>
			<p>Following your inspiration...</p>
			<Quote>{quote}</Quote>
			<Speaker>- {speaker}</Speaker>
			<Button>Music library</Button>
		</Wrapper>
	);
}; 

Quotes.propTypes = {
	quote: string,
	speaker: string,
};


