import React from 'react';
import Modal from 'react-modal';

export const RemoveModal = ({ isModalOpen, changeModalState, onRemove }) => (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={changeModalState}
        contentLabel="Remove expense"
        appElement={document.getElementById('app')}
        className="modal" >

        <h2>Are you sure to remove an expense?</h2>
        <button className="button button--blue modal__button" onClick={changeModalState}>Never mind</button>
        <button className="button button--red" onClick={onRemove}>Sure</button>
    </Modal>
);

export default RemoveModal;