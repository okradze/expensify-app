import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        isModalOpen: false
    };
    onSubmit = (updates) => {
        this.props.startEditExpense(this.props.expense.id, updates);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    changeModalState = () => {
        this.setState(() => ({ isModalOpen: !this.state.isModalOpen }));
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit} />
                    <button className="button button--grey" onClick={this.changeModalState}>Remove</button>
                </div>
                <RemoveModal 
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.changeModalState}
                    onRemove={this.onRemove} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, update) => dispatch(startEditExpense(id, update)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);