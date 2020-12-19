import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardButton } from 'components';
import { AddRecipe, AddSchedule, AddShoppingList } from 'containers/Forms';
import { useModalContext } from 'contexts/ModalContext';
import React from 'react';

export interface AddingButtonsProps {}

const AddingButtons: React.SFC<AddingButtonsProps> = () => {
	const { handleModal, showModal, setShowModal } = useModalContext();

	return (
		<DashboardButton.Group>
			<DashboardButton
				color='success'
				direction='column'
				id='recipe'
				onClick={() =>
					handleModal(
						<AddRecipe showModal={showModal} setShowModal={setShowModal} />
					)
				}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>przepis</DashboardButton.Text>
			</DashboardButton>

			<DashboardButton
				color='success'
				direction='column'
				id='schedule'
				onClick={() => handleModal(<AddSchedule />)}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>plan</DashboardButton.Text>
			</DashboardButton>

			<DashboardButton
				color='success'
				direction='column'
				id='shopping'
				onClick={() => handleModal(<AddShoppingList />)}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>zakupy</DashboardButton.Text>
			</DashboardButton>
		</DashboardButton.Group>
	);
};

export default AddingButtons;
