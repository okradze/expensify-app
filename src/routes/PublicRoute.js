import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuth, component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        isAuth ? (
            <Redirect to="/dashboard" />
            
        ) : (
            <div>
                <Component {...props} />
            </div>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);