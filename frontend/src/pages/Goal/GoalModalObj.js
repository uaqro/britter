import React, { useState, useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import { Select, Button } from 'grommet';

const GoalModalObj = () => {
	const modalctx = useContext(ModalContext);
	const [object, setObject] = useState('');

	return (
		<>
			<p>¿Qué te quieres comprar?</p>
			<Select
				multiple={false}
				onChange={evt => setObject(evt.value)}
				options={[
					'Moto',
					'Coche',
					'Viaje',
					'Computadora',
					'Consumo',
					'Tenis'
				]}
			/>

			<div className="buttons">
				<button className="bad" onClick={() => modalctx.setShow()}>
					Close
				</button>
				<button
					className="good"
					onClick={() => modalctx.checkBudget(object)}
				>
					Next Step
				</button>
			</div>
		</>
	);
};

export default GoalModalObj;
