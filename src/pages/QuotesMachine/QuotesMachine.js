import React from 'react';
import styled from 'styled-components';

import bgImg from '../../assets/images/purple-sky.jpg';
import recordPlayerImg from '../../assets/images/photo-1526815456940-2c11653292a2.webp';

import { Quotes } from '../../components';



const Container = styled.div`
	background: url(${bgImg}) center no-repeat;
	background-size: cover;
	color: #f1e7e6;
	text-shadow: 2px 2px 4px red, 2px 2px 10px #b9370e;
	padding: 0;
	margin: 0;
	font-family: 'New Tegomin', serif;
`;

const Content = styled.div`
	height: 100vh;
	padding: 0 50px;
	display: flex;
	jusitfy-content: center;
	align-items: center;
	
`;

const RecordImg = styled.img`
	max-width: 38vw;
	align-self: flex-end;
	margin-bottom: 25px;
	opacity: 0.7;
	border-radius: 60%;
`;



export const QuotesMachine = () => {

	
	return (
		<Container>
			<Content>
				<Quotes quote={'ok'} speaker={'Speaker'} />
				<RecordImg src={recordPlayerImg} alt="Imagem de uma vitrola" />
			</Content>
		</Container>
	);
};



