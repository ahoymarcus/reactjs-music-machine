import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Quotes } from '../../components';

import { getQuote } from '../../services';

import bgImg from '../../assets/images/purple-sky.jpg';
import recordPlayerImg from '../../assets/images/photo-1526815456940-2c11653292a2.webp';
import rocketSound from '../../assets/sounds/mixkit-fast-rocket-whoosh-1714.wav';

const audio = new Audio(rocketSound);



export const QuotesMachine = () => {
	// O hook useRef() permite atualizar estados mesmo com componentes já desmontados
	const isMounted = useRef(true);
	console.log("mounted: ");
	console.log(isMounted);
	
	// Variável para teste
	//let mounted = true;
	//console.log("mounted: " + mounted);
	
	const [ quoteState, setQuoteState ] = useState({ quote: 'Loading quote...', speaker: 'Loading author...' });
	
	
	const onUpdate = async () => {
		console.log('teste update');
		audio.play();
		setQuoteState('novo estado...');
		
		
		/*
			Abaixo temos uma validação para evitar tentativas de setar o estado quando de um retorno assíncrono de API que encontre o componente já desmontado!!!!!!
		*/
		// const quote = await getQuote();
		if (isMounted.current) {
			//audio.play();
			// setQuoteState(quote);
		}
	};
	
	// useEffect() com o [] de observação vazio: componentDidMount()
	// useEffect() com uma prop sendo observada no [], componentDidUpdate()
	// O retorno num useEffect() é componentDidUnmount()
	useEffect(() => {
		console.log('quoteState foi alterado');
		// Veja que este valor abaixo nunca é utilizado!!!
		
		isMounted.current = false;
		//mounted = false;
		
		//onUpdate();
		
		return () => {
			console.log("componente foi desmontado...");
		};
	}, [quoteState]);
	
	
	
	return (
		<Container>
			<Content>
				<Quotes 
					{...quoteState}
					onUpdate={onUpdate} 
				/>
				<RecordImg src={recordPlayerImg} alt="Imagem de uma vitrola" />
			</Content>
		</Container>
	);
};

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
	box-shadow: 2px 2px 4px #091554, 2px 2px 10px #b9370ed1;
`;




