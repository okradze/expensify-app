import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

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

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]])
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '121'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'rent',
            note: '',
            amount: 0,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'qira',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('qira');
});

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '121',
        updates: {
            description: 'qira',
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});