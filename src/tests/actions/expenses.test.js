import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import moment from 'moment';
import db from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const expenses = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 125000,
    createdAt: 0
}, {
    id: '2',
    description: 'Water bill',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    db.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense('123');
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

test('should setup set expense action object with date', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase db', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions()[0];
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startRemoveExpense('1')).then(() => {
        const action = store.getActions()[0];
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '1'
        });
        return db.ref(`expenses/1`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    }); 
});