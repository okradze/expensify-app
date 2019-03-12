import React from 'react';
import getExpensesTotal from '../../selectors/expenses-total';
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

test('should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toBe(125000);
});

test('should correctly add multiple expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(126195);
});