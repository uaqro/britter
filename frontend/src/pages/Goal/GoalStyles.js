import styled from 'styled-components';

export const GoalsLayout = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	margin:60px 0;
`;
export const GoalsBox = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 90%;
	.titulo {
		width: 100%;
		display: flex;
		box-sizing: border-box;
	}
`;
export const ModalButton = styled.button`
	width: 80%;
	align-self: center;
	border: 1px solid green;
	padding: 2vw 2vh;
	margin-top: 3vh;
`;

export const ModalWrapper = styled.div`
	.display-block {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		transition: all 0.5s ease;
		background: rgba(0, 0, 0, 0.6);
	}
	.display-none {
		display: none;
	}
`;

export const ModalContent = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	alignt-text: center;
	width: 100vw;
	hieght: 100vh;
`;
export const ModalWindow = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	alignt-text: center;
	margin-top: 20vh;
	background-color: white;
	width: 80vw;
	min-height: 45vh;
	justify-content: space-around;
	align-items: center;
	margin-left: 10vw;
	input {
		width: 50vw;
		input[list] {
			display: flex;
			flex-direction: row;
		}
	}
	p {
		padding-top: 4vh;
		width: 80%;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		width: 80%;
		justify-content: space-around;
		button {
			width: 25vw;
			height: 35px;
			color: white;
			border-radius: 3px;
			border: solid 1px #71af53;
			background-color: #9ce07b;
			.bad {
				border-radius: 3px;
				border: solid 1px '#8d0101';
				background-color: '#c62121';
			}
		}
		padding-top: 2vh;
		padding-bottom: 5vh;
	}
`;
