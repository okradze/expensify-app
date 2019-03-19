import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const LogoutModal = ({ isModalOpen, closeModal, startLogout }) => (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Log Out"
        appElement={document.getElementById('app')}
        className="modal">


        <h2>Are you sure to log out?</h2>
        <button className="button button--blue modal__button" onClick={closeModal}>Stay</button>
        <button className="button button--red" onClick={startLogout}>Log Out</button>
    </Modal>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(LogoutModal);