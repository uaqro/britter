import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import ElementBox from './ElementBox/ElementBox';
import { Button } from 'grommet';
import { MyContext } from '../../contexts/context';

const GoalModalCongratz = () => {
	const modalctx = useContext(ModalContext);
	const ctx = useContext(MyContext);
	return (
		<div>
			<p>Felicidades!</p>
			<ElementBox goal={modalctx.submitedGoal} />
			<Button
				onClick={() => {
					modalctx.setShow();
					ctx.setState({
						user: {
							...ctx.user,
							spendGoals: ctx.user.spendGoals.push(
								modalctx.submitedGoal
							)
						}
					});
				}}
			>
				Al turrón!
			</Button>
		</div>
	);
};
export default GoalModalCongratz;
