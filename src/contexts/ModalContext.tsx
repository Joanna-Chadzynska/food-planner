import { Modal } from 'components';
import { useModal } from 'hooks';
import React, { createContext, useContext } from 'react';

export interface ModalProviderProps {}

export const ModalContext: any = createContext({});

const ModalProvider: React.SFC<ModalProviderProps> = ({ children }) => {
	const { showModal, handleModal, modalContent } = useModal();
	return (
		<ModalContext.Provider value={{ showModal, handleModal, modalContent }}>
			<Modal />
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => {
	const { showModal, handleModal, modalContent } = useContext(ModalContext);
	return { showModal, handleModal, modalContent };
};

export default ModalProvider;
