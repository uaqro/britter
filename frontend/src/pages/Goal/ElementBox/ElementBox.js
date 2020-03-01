import React, { useState, useEffect } from 'react';
import { ElementBoxStyles, BoxButton } from './ElementBoxStyles';
import MY_SERVICE from '../../../services/index';

const ElementBox = ({ goal }) => {
	return (
		<ElementBoxStyles>
			<p>{goal.object}</p>
			<p>{goal.goal}</p>
			<p>{goal.daysToGoal}</p>
			<BoxButton
				onClick={() => MY_SERVICE.updateGoal(goal._id, goal.dayliPay)}
			>
				{`Deposita tus ${goal.dayliPay}$MXN de hoy`}
			</BoxButton>
		</ElementBoxStyles>
	);
};

export default ElementBox;
