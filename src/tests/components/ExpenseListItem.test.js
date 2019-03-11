import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';

test('should render expense item correctly', () => {
    const wrapper = shallow(<ExpenseListItem id='1' description='Rent' note='' amount={125000} createdAt={0} />);
    expect(wrapper).toMatchSnapshot();
});