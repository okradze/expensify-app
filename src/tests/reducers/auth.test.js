import authReducer from '../../reducers/auth';

test('should setup uid after login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: '123' });
});

test('should clear uid after logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '123' }, action);
    expect(state).toEqual({});
});