import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'rent' });
    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual(endDate);
});