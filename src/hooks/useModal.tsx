import { useState } from 'react';

const useModal = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState("I'm the modal content!");

	const handleModal = (content: any = false) => {
		setShowModal(!showModal);
		if (content) {
			setModalContent(content);
		}
	};
	return { showModal, handleModal, modalContent };
};

export default useModal;
