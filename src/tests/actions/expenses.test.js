import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense,addExpense, removeExpense, editExpense } from '../../actions/expenses';
import moment from 'moment';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const expenses = [{
    description: 'Rent',
    note: '',
    amount: 125000,
    createdAt: 0
}, {
    description: 'Water bill',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('should edit expense', () => {
    const action = editExpense('123', { note: 'Updated' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'Updated'
        }
    });
});

test('should setup add expense action object', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to db and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Earphones',
        amount: 3000,
        note: '',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions()[0]
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return db.ref(`expenses/${action.expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to db and store', (done) => {
    const store = createMockStore({});
    const defaultValues = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const action = store.getActions()[0];
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultValues
            }
        });
        return db.ref(`expenses/${action.expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultValues);
        done();
    });
});