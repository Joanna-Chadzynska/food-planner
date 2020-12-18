import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useModalContext } from 'contexts/ModalContext';
import React from 'react';
import { createPortal } from 'react-dom';
import { Close, Inner, Overlay } from './styles/modal';

export interface ModalProps {}

const Modal: React.SFC<ModalProps> = ({ children, ...restProps }) => {
	const { showModal, handleModal, modalContent } = useModalContext();
	return showModal
		? createPortal(
				<Overlay {...restProps}>
					<Inner>
						<Close onClick={() => handleModal()}>
							<FontAwesomeIcon icon={['fas', 'window-close']} />
						</Close>
						{modalContent}
					</Inner>
				</Overlay>,
				document.body
		  )
		: null;
};

export default Modal;
