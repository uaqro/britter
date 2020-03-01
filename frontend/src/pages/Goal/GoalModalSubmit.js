import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';

const GoalModalSettings = () => {
	const modalctx = useContext(ModalContext);
	return (
		<>
			{modalctx.credit ? (
				<>
					<p>¡Sueñas en grande!</p>
					<p>{`Ahorra ${modalctx.dailyPay} durante ${modalctx.daysToGoal} días para comprar tu ${modalctx.object}.`}</p>
					<p>Cumple tus pagos diarios y obtendrás un crédito mejor</p>
				</>
			) : (
				<>
					<p>{`Ahorra ${modalctx.dailyPay} durante ${modalctx.daysToGoal} días para comprar tu ${modalctx.object}.`}</p>
					<div className="buttons">
						<button onClick={() => modalctx.submitGoal()}>
							Quiero conseguirlo!
						</button>
						<button onClick={() => modalctx.setShow()}>
							Pussy
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default GoalModalSettings;
