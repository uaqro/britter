import React from 'react';
import GoalModal from './GoalModal';
import { MyContext } from '../../contexts/context';
import { ModalContext } from '../../contexts/modalContext';
import ElementBox from './ElementBox/ElementBox';
import { GoalsLayout, GoalsBox, ModalButton } from './GoalStyles';

const Goals = props => {
	return (
		<GoalsLayout>
			<MyContext.Consumer>
				{context => (
					<ModalContext.Consumer>
						{modalctx => (
							<GoalsBox>
								<div className="titulo">
									<p>Tus metas</p>
								</div>
								{context.user.spendGoals.map(
									(element, index) => (
										<ElementBox
											goal={element}
											key={index}
										/>
									)
								)}
								{context.user.spendGoals.length < 3 ? (
									<ModalButton onClick={modalctx.setShow}>
										Añadir Objetivo
									</ModalButton>
								) : (
									<></>
								)}
								<GoalModal />
							</GoalsBox>
						)}
					</ModalContext.Consumer>
				)}
			</MyContext.Consumer>
		</GoalsLayout>
	);
};
export default Goals;
