store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 2000, createdAt: 400 }));
store.dispatch(sortByAmount());