import styled from 'styled-components';

export const ConciergeStyles = styled.div`
	/* .main-logo {
		left: 50%;
		position: absolute;
		top: 30px;
		transform: translate(-50%, 0);
		z-index: 10;
	} */
	.card {
		width: 280px;
		background: white;
		border: solid 1px #dddfe6;
		border-radius: 4px;
		padding: 15px;
		position: absolute;
		left: 50%;
		top: 100px;
		box-shadow: 0 5px 10px 12px rgba(37, 44, 65, 0.05);
		transform: translate(-50%, 0);
		width: calc(100% - 80px);
		z-index: 10;
	}
	.mapGo {
		right: 15px;
		position: absolute;
		top: 18px;
	}
	form input {
		border: none;
		color: #252c41;
		font-size: 16px;
		font-weight: bold;
	}
	form button {
		opacity: 0;
	}
	.search p {
		color: #252c41;
		font-size: 14px;
		font-weight: bold;
		margin: 5px 0 0 2px;
		opacity: 0.4;
		text-align: left;
	}
`;
