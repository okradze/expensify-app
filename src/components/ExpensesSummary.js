import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ count, total, hiddenCount }) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{count}</span> {count > 1 ? 'expenses' : 'expense'} totaling <span>{numeral(total / 100).format('$0,0.00')}</span></h1>
                {hiddenCount > 0 && <h2 className="page-header__subtitle">Hidden <span>{hiddenCount}</span> {hiddenCount > 1 ? 'expenses' : 'expense'}, because of filtering</h2>}
                <div className="page-header__actions">
                    <Link className="button button--blue" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const hiddenCount = state.expenses.length - visibleExpenses.length

    return {
        count: visibleExpenses.length,
        total: getExpensesTotal(visibleExpenses),
        hiddenCount
    };
};

export default connect(mapStateToProps)(ExpensesSummary);