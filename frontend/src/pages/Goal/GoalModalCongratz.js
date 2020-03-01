import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import ElementBox from './ElementBox/ElementBox';
import { Button } from 'grommet';

const GoalModalCongratz = () => {
	const modalctx = useContext(ModalContext);
	return (
		<div>
			<p>Felicidades!</p>
			<ElementBox goal={modalctx.submitedGoal} />
			<Button onClick={() => modalctx.setShow()}>Al turrón!</Button>
		</div>
	);
};

export default GoalModalCongratz;
