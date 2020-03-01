import styled from 'styled-components';

export const GoalsLayout = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
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
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
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
	background-color: white;
	width: 100vw;
	align-self: center;
	min-height: 45vh;
`;
export const ModalWindow = styled.div`
	.buttons {
		display: flex;
		flex-direction: row;
		button {
			width: 30%;
		}
	}
`;
