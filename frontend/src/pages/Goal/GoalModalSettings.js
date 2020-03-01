import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import { RangeInput, Button } from 'grommet';

const GoalModalSettings = () => {
	const modalctx = useContext(ModalContext);
	const maxPrice = modalctx.price * 1.5;
	return (
		<>
			<p>{`Te recomendamos gastar ${modalctx.price}$MXN en tu ${modalctx.object}`}</p>
			<p>¿Cuánto quieres gastar?</p>
			<RangeInput
				value={modalctx.price}
				min={0}
				max={maxPrice}
				step={1}
				onChange={event =>
					modalctx.stateHandler('budget', event.target.value)
				}
			/>
			<p>{modalctx.budget}</p>
			<div className="buttons">
				<Button onClick={() => modalctx.setShow()}>Cerrar</Button>
				<Button onClick={() => modalctx.checkGoal()}>Continuar</Button>
			</div>
		</>
	);
};

export default GoalModalSettings;
