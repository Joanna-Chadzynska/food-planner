import { Modal } from 'components';
import { useModal } from 'hooks';
import React, { createContext, useContext } from 'react';

export interface ModalProviderProps {}

export const ModalContext: any = createContext({});

const ModalProvider: React.SFC<ModalProviderProps> = ({ children }) => {
	const { showModal, handleModal, modalContent, setShowModal } = useModal();
	return (
		<ModalContext.Provider
			value={{ showModal, handleModal, modalContent, setShowModal }}>
			<Modal />
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => {
	const { showModal, handleModal, modalContent, setShowModal } = useContext(
		ModalContext
	);
	return { showModal, handleModal, modalContent, setShowModal };
};

export default ModalProvider;
