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
					<p>{`Ahorra ${modalctx.dayliPay}$ durante ${modalctx.daysToGoal} días para comprar tu ${modalctx.object}.`}</p>
					<p>Cumple tus pagos diarios y obtendrás un crédito mejor</p>
					<div className="buttons">
						<Button onClick={() => modalctx.setShow()}>
							¿Te rajas?
						</Button>
						<Button onClick={() => modalctx.submitGoal()}>
							Lo quiero!
						</Button>
					</div>
				</>
			) : (
				<>
					<p>{`Ahorra ${modalctx.dayliPay} durante ${modalctx.daysToGoal} días para comprar tu ${modalctx.object}.`}</p>
					<div className="buttons">
						<Button onClick={() => modalctx.setShow()}>
							¿Te rajas?
						</Button>
						<Button onClick={() => modalctx.submitGoal()}>
							Lo quiero!
						</Button>
					</div>
				</>
			)}
		</>
	);
};

export default GoalModalSettings;
