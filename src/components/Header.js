import React from 'react';
import { Link } from 'react-router-dom';
import LogoutModal from './LogoutModal';

export class Header extends React.Component {
    state = {
        isModalOpen: false
    };
    changeModalState = () => {
        this.setState(() => ({ isModalOpen: !this.state.isModalOpen }));
    };
    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard">
                            <h1 className="header__heading">Expensify</h1>
                        </Link>
                        <button className="button" onClick={this.changeModalState}>Log Out</button>
                    </div>
                </div>
                <LogoutModal
                    isModalOpen={this.state.isModalOpen} 
                    closeModal={this.changeModalState} />
            </header>
        );
    }
};

export default Header;