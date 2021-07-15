import React from 'react';
import styled from 'styled-components';

import recordPlayerImg from '../../assets/images/photo-1526815456940-2c11653292a2.webp';

import { Quotes } from '../../components';



const Container = styled.div`
	position: relative;
	text-align: center;
`;

const Content = styled.div`
	position: absolute;
	/*top: 50px;*/
	right: 140px;
	
	height: 100vh;
	/*padding: 0 50px;*/
	display: flex;
	jusitfy-content: center;
	align-items: center;
	
	/*background-image: url(${recordPlayerImg});
	background-repeat: no-repeat;
	background-size: cover;*/
	
`;

const Quote = styled.p`
	font-size: 28px;
	color: #f1e7e6;
	text-shadow: 2px 2px 4px red, 2px 2px 10px #b9370e;;
`;

const RecordImg = styled.img`
	width: 100%;
	min-width: 490px;
	max-width: 850px;
	margin-top: 50px;
`;



export const QuotesMachine = () => {

	
	return (
		<Container>
			<Content>
				<Quotes quote={'ok'} speaker={'Speaker'} />
			</Content>
			<RecordImg src={recordPlayerImg} alt="Imagem de uma vitrola" />
		</Container>
	);
};



