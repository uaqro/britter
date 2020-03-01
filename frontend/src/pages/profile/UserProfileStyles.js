import styled from 'styled-components';

const c_black = '#0F071C';
const c_text = '#42445e';
const c_gray = '#dddfe6';
const c_darkOrange = '#e6a71e';
const c_orange = '#ffcb5a';

export const UserProfileStyles = styled.div`
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
		border: solid 1px ${c_gray};
		box-shadow: 0 5px 10px 12px rgba(37, 44, 65, 0.05);
		margin: 0 auto;
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
`;
