import styled from 'styled-components';

const c_black = '#0F071C';
const c_text = '#42445e';
const c_green = '#81c461';
const c_red = '#f66868';
const c_gray = '#dddfe6';
const c_darkOrange = '#e6a71e';
const c_orange = '#ffcb5a';

export const UserProfileStyles = styled.div`
	padding: 100px 0 0 0;

	* {
		box-sizing: border-box;
	}
	.main-logo {
		margin: 30px 0;
	}
	.section-title {
		font-size: 20px;
		margin: 0 0 10px 30px;
		text-align: left;
	}
	.profile-card {
		background: white;
		border: 1px solid ${c_gray};
		box-shadow: 0 5px 10px 12px rgba(37, 44, 65, 0.05);
		margin: 0 auto 30px;
		padding: 0;
		width: calc(100% - 60px);
	}
	.card-user-image {
		background-color: ${c_black};
		background-position: center !important;
		background-repeat: no-repeat !important;
		background-size: contain;
		height: 100px;
		width: 100%;
	}
	.card-user-intel {
		align-items: flex-start;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		padding: 15px 20px;
		width: 100%;
	}
	.left-side {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 80%;
	}
	.card-user-intel .user-name {
		color: ${c_text};
		font-size: 20px;
		margin: 0 0 8px;
		text-align: left;
	}
	.coin-holder-data {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 80%;
	}
	.data-coins {
		font-weight: bold;
	}
	.data-coins.goal {
		color: ${c_gray};
		font-weight: bold;
	}
	.data-coins.actual {
		color: ${c_black};
		font-weight: bold;
	}
	.data-coins.actual img {
		margin-right: 5px;
	}
	.data-coins.goal img {
		margin-left: 5px;
	}
	.coin-mt {
		border: 2px solid ${c_darkOrange};
		border-radius: 3.5px;
		height: 10px;
		margin-top: 3px;
		position: relative;
		width: 80%;
	}
	.actual-meter {
		background: ${c_orange};
		left: 0;
		height: 100%;
		position: absolute;
		top: 0;
	}
	.right-side {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 20%;
	}
	.right-side p {
		margin: 0;
		text-align: center;
		width: 100%;
	}
	.level-text {
		color: ${c_text};
		font-size: 20px;
		font-weight: bold;
	}
	.actual-level {
		font-size: 42px;
		font-weight: bold;
	}
	.full-width {
		align-items: center;
		border: solid 1px ${c_gray};
		background-size: contain !important;
		background-repeat: no-repeat !important;
		display: flex;
		height: 32px;
		justify-content: center;
		position: relative;
		width: 100%;
	}
	.full-width .texter {
		color: ${c_black};
		position: absolute;
		font-size: 8px;
		left: 12px;
		top: 3px;
		margin: 0;
	}
	.goal-card {
		background: white;
		border: 1px solid ${c_gray};
		box-shadow: 0 5px 10px 12px rgba(37, 44, 65, 0.05);
		margin: 0 auto 20px;
		padding: 15px;
		width: calc(100% - 60px);
	}
	.goal-card.green {
		border: 1px solid ${c_green};
	}
	.goal-card.red {
		border: 1px solid ${c_red};
	}
	.goal-card .title {
		color: ${c_black};
		font-size: 12px;
		margin: 0 0 5px;
		text-align: left;
	}
	.goal-card .coin-mt {
		width: 100%;
	}
	.goal-card .coin-mt.green {
		border: 1px solid ${c_green};
	}
	.goal-card .coin-mt.green .actual-meter {
		background: ${c_green};
	}
	.goal-card .coin-mt.red {
		border: 1px solid ${c_red};
	}
	.goal-card .coin-mt.red .actual-meter.red {
		background: ${c_red};
		width: 100% !important;
	}
	.lds-dual-ring {
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		display: inline-block;
		width: 80px;
		height: 80px;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #f1404b;
		border-color: #f1404b transparent #f1404b transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
