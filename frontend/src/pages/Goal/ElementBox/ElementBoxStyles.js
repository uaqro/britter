import styled from 'styled-components';

export const ElementBoxStyles = styled.div`
	margin-top: 2vh;
	padding: 1vh 1vw;
	width: 100%;
	border: 1px solid black;
	svg {
		width: 150px;
		margin-bottom: 1vh;
	}
	p:first-of-type {
		font-weight: 700;
		font-size: 1.2em;
	}
`;

export const BoxButton = styled.button`
	width: 80%;
	align-self: center;
	border: 1px solid green;
	padding: 2vw 2vh;
`;
