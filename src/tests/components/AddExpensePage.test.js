import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
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

let onSubmit, history, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[0]);
});