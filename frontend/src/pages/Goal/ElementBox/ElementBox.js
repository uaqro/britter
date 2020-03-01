import React from 'react';
import { ElementBoxStyles, BoxButton } from './ElementBoxStyles';
import MY_SERVICE from '../../../services/index';
import { Meter } from 'grommet';

const ElementBox = ({ goal }) => {
	return (
		<ElementBoxStyles>
			<p>{goal.object}</p>
			<p>{goal.goal}</p>
			<p>{goal.daysToGoal}</p>
			<Meter
				type="circle"
				max={goal.goal}
				values={[
					{
						label: 'First',
						value: goal.currentSaving
					}
				]}
			/>
			<BoxButton
				onClick={() => MY_SERVICE.updateGoal(goal._id, goal.dayliPay)}
			>
				{`Deposita tus ${goal.dayliPay} $MXN de hoy`}
			</BoxButton>
		</ElementBoxStyles>
	);
};

export default ElementBox;
