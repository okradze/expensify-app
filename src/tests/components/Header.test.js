import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call changeModalState on button click', () => {
    const wrapper = shallow(<Header />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isModalOpen')).toBe(true);
});