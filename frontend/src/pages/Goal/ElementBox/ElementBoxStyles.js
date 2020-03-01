import styled from 'styled-components';

export const ElementBoxStyles = styled.div`
	background: white;
	width: calc(100% - 60px);
	border: solid 1px #dddfe6;
	box-shadow: 0 5px 10px 12px rgba(37, 44, 65, 0.05);
	margin-top: 10px;
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	justify-content: center;
	svg {
		width: 150px;
		margin-bottom: 1vh;
	}
	.button-deposit {
		width: 268px;
		height: 35px;
		border-radius: 3px;
		border: solid 1px #71af53;
		background-color: #9ce07b;
		transform: translateY(-50px);
		position: relative;
		z-index: 10;
		span {
			color: #71af53;
			font-size: 12px;
			font-weight: 900;
		}
	}
	p:first-of-type {
		font-weight: 700;
		font-size: 1.2em;
	}
	.left {
		box-sizing: border-box;
		height: 173px;
		position: relative;
		height: 100%;
		width: 40%;
		img {
			left: 50%;
			top: 50%;
			position: absolute;
			height: auto;
			transform: translate(-50%, -50%);
			width: 174px;
			z-index: 10;
		}
	}
	.right {
		height: 173px;
		box-sizing: border-box;
		padding-top: 20px;
		padding-right: 16px;
		width: 60%;
		.product-title {
			display: flex;
			align: flex-start;
			flex-direction: column;
			justify-content: flex-start;
			margin: 0;
			span {
				width: 100%;
				text-align: right;
				&.big {
					color: #252c41;
					font-size: 20px;
					font-weight: 900;
				}
				&.small {
					font-size: 9px;
					letter-spacing: 2.05px;
					color: #252c41;
				}
			}
			.bar {
				border: 1px solid #252c41;
				opacity: 0.39;
				border-radius: 4px;
				height: 10px;
				margin-top: 5px;
				position: relative;
				width: 100%;
				.actual-goal {
					background: #81c461;
					left: 0;
					position: absolute;
					top: 0;
					height: 100%;
					width: 30%;
				}
			}
			.savings {
				font-size: 14px;
				font-weight: bold;
				color: #81c461;
			}
			.price-holder {
				display: flex;
				align-items: center;
				flex-direction: row;
				justify-content: flex-end;
				span {
					width: auto;
					&.price-text {
						color: #252c41;
						font-size: 14px;
						margin-right: 5px;
						opacity: 0.4;
						font-weight: 400;
					}
					&.price-number {
						color: #f1404b;
						font-size: 18px;
						font-weight: 900;
					}
				}
			}
		}
	}
	.meter {
		width: 100%;
	}
`;

export const BoxButton = styled.button`
	width: 80%;
	align-self: center;
	border: 1px solid green;
	padding: 2vw 2vh;
`;
