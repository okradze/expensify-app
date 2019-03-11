import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, filters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate} />
    );
});

test('should render ExpenseListFilters correctly with default filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with filters', () => {
    wrapper.setProps({ filters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'Bills'
    wrapper.find('input').simulate('change', { target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    wrapper.setProps({ filters });
    const value = 'date'
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', { target: { value } });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle data change', () => {
    const startDate = moment(0).add('1', 'years');
    const endDate = moment(0).add('3', 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});