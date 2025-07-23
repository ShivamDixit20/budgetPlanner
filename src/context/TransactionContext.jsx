import React, { createContext, useContext, useState } from 'react';




export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const initialTransactions = [
        { id: 1, title: 'Grocery Shopping', amount: -85.50, category: 'Food', date: '2024-01-15' },
        { id: 2, title: 'Salary', amount: 3500.00, category: 'Income', date: '2024-01-15' },
        { id: 3, title: 'Gas Station', amount: -45.20, category: 'Transportation', date: '2024-01-14' },
        { id: 4, title: 'Coffee Shop', amount: -12.80, category: 'Food', date: '2024-01-14' },
        { id: 5, title: 'Freelance Work', amount: 750.00, category: 'Income', date: '2024-01-13' },
        { id: 6, title: 'Phone Bill', amount: -89.99, category: 'Bills', date: '2024-01-12' },
    ];
    const [transactions, setTransactions] = useState(initialTransactions);

    const addTransaction = (transaction) => {
        const newTransaction = {
            ...transaction,
            id: transactions.length + 1,
        };
        setTransactions([newTransaction, ...transactions]);
    };

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};


export default  TransactionProvider