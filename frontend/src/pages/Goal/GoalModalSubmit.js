import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modalContext';
import { Button } from 'grommet';

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
						<Button
							onClick={() => modalctx.setShow()}
							color={{ border: 'accent-1' }}
						>
							¿Te rajas?
						</Button>
						<Button
							onClick={() => modalctx.submitGoal()}
							color={{ border: 'status-critical' }}
						>
							Quiero conseguirlo!
						</Button>
					</div>
				</>
			)}
		</>
	);
};

export default GoalModalSettings;
