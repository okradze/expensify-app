import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should set end date action object', () => {
    const action = setEndDate(moment(100000));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(100000)
    });
});

test('should setup set text filter action object', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should setup sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should setup sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});