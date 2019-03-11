import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info</p>
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrapperComponent {...props} /> : <p>Please login to view the info</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="Welcome, Mirian!" />, document.getElementById('app'));