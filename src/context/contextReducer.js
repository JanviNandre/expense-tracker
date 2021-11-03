const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'delete_transaction':
            transactions = state.filter((t) => t.id !== action.payload);

            localStorage.setItem("transactions", JSON.stringify(transactions));
            return transactions;
        case 'add_transaction':
            transactions = [action.payload, ...state];
            localStorage.setItem("transactions", JSON.stringify(transactions));
            return transactions;

        default:
            return state;
    }
}

export default contextReducer;