import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render component correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary count={1} total={1000} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render component correctly with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary count={3} total={10000} />);
    expect(wrapper).toMatchSnapshot();
});