import React, { useContext } from 'react';
import GoalModalObj from './GoalModalObj';
import GoalModalSettings from './GoalModalSettings';
import GoalModalCongratz from './GoalModalCongratz';
import GoalModalSubmit from './GoalModalSubmit';
import { ModalContext } from '../../contexts/modalContext';

import { ModalWrapper, ModalContent, ModalWindow } from './GoalStyles';

const GoalModal = () => {
	const modalctx = useContext(ModalContext);
	const handleShow = modalctx.show
		? 'modal display-block'
		: 'modal display-none';

	return (
		<ModalWrapper>
			<div className={handleShow}>
				<ModalContent>
					<ModalWindow>
						{modalctx.step === 0 ? (
							<GoalModalObj />
						) : modalctx.step === 1 ? (
							<GoalModalSettings />
						) : modalctx.step === 2 ? (
							<GoalModalSubmit />
						) : modalctx.step === 3 ? (
							<GoalModalCongratz />
						) : (
							<></>
						)}
					</ModalWindow>
				</ModalContent>
			</div>
		</ModalWrapper>
	);
};

export default GoalModal;
