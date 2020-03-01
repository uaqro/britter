import React, { useState, useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';

const GoalModalObj = () => {
	const modalctx = useContext(ModalContext);
	const [object, setObject] = useState('');
	return (
		<>
			<p>¿Qué te quieres comprar?</p>
			<input
				type="text"
				name="object"
				list="prods"
				onChange={evt => setObject(evt.target.value)}
			/>
			<datalist id="prods">
				<option value="Moto" />
				<option value="Coche" />
				<option value="Viaje" />
				<option value="Computadora" />
				<option value="Consumo" />
			</datalist>
			<div className="buttons">
				<button
					onClick={() => {
						modalctx.stateHandler('step', 1);
						modalctx.checkBudget(object);
					}}
				>
					Next Step
				</button>
			</div>
			<button onClick={() => modalctx.setShow()}>Close</button>
		</>
	);
};

export default GoalModalObj;
