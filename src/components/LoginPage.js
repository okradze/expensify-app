import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import google from '../../images/google.svg';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>Get your expenses under control.</p>
            <button className="button button--blue" onClick={startLogin}><img className="box-layout__google" src={google}></img>Log in by Google</button>
        </div>
        <p className="box-layout__copyright">Tbilisi's photo was taken by Giorgi Gvilava</p>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);