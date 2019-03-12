import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ count, total }) => {
    return (
        <div>
            <p>Viewing {count} {count > 1 ? 'expenses' : 'expense'} totaling {numeral(total / 100).format('$0,0.00')}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        count: visibleExpenses.length,
        total: getExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);