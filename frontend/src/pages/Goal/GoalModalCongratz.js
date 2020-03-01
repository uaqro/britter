import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import ElementBox from './ElementBox/ElementBox';

const GoalModalCongratz = () => {
	const modalctx = useContext(ModalContext);
	return (
		<div className="buttons">
			<p>Felicidades!</p>
			<ElementBox element={modalctx.goal} />
			<button onClick={() => modalctx.setShow()}>Al turrón!</button>
		</div>
	);
};

export default GoalModalCongratz;
