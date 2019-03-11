import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
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

test('should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});