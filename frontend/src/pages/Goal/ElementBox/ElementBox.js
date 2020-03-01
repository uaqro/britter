import React from 'react';
import { ElementBoxStyles, BoxButton } from './ElementBoxStyles';
import MY_SERVICE from '../../../services/index';
import { Meter } from 'grommet';
import Nike from '../../../assets/jumpman2020.png';

const ElementBox = ({ goal }) => {
	return (
		<ElementBoxStyles>
			<div className="left">
				<img src={Nike} alt="Jumpman 2020" />
			</div>
			<div className="right">
				<p className="product-title">
					<span className="small">NIKE</span>
					<span className="big">{goal.object}</span>
					<div className="price-holder">
						<span className="price-text">Precio</span>
						<span className="price-number">${goal.goal}</span>
					</div>
					<span className="savings">Ahorrado $300</span>
					<div className="bar">
						<div className="actual-goal"></div>
					</div>
				</p>
				{/* <p>{goal.daysToGoal}</p> */}
			</div>
			{/* <Meter
				className="meter"
				type="bar"
				max={goal.goal}
				values={[
					{
						label: 'First',
						value: goal.currentSaving
					}
				]}
			/> */}
			<BoxButton
				className="button-deposit"
				onClick={() => MY_SERVICE.updateGoal(goal._id, goal.dayliPay)}
			>
				<span>{`Deposita tus ${goal.dayliPay} $MXN de hoy`}</span>
			</BoxButton>
		</ElementBoxStyles>
	);
};

export default ElementBox;
