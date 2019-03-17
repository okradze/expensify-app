import { login, logout, startLogin, startLogout } from '../../actions/auth';

test('should setup login action', () => {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should setup logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
