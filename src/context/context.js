import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer'
const initialState = JSON.parse(localStorage.getItem("transactions")) || [{ "amount": 25, "category": "Food", "type": "Expense", "date": "2021-11-03", "id": "e16068f3-b86a-4159-a87f-abcebc6324f7" }, { "amount": 50, "category": "Travel", "type": "Expense", "date": "2021-11-17", "id": "63f121e8-1927-485f-bbcd-ceb27cb70005" }, { "amount": 50, "category": "Investments", "type": "Income", "date": "2021-11-03", "id": "0047120a-bd91-4e9b-9d16-cdf9176f9e2a" }, { "amount": 200, "category": "", "type": "Income", "date": "2021-11-05", "id": "46a7fc56-c6e4-4066-807d-f3ddb339e6ef" }, { "amount": 100, "category": "Business", "type": "Income", "date": "2021-11-08", "id": "e2e80f4e-23f7-4386-b704-167f30b12f23" }, { "amount": 100, "category": "Pets", "type": "Expense", "date": "2021-11-07", "id": "aafe3dd0-83f7-4fcd-aad0-a16a28f84f61" }, { "amount": 100, "category": "Business", "type": "Income", "date": "2021-11-08", "id": "0f037a23-9aa5-4a9e-a47a-b52129b89f59" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'delete_transaction', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'add_transaction', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0)

    // console.log(transactions);
    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

