import React, { useContext } from 'react';
import '../css/Dashboard.css';
import { TransactionContext } from '../context/TransactionContext';

const Dashboard = () => {
  const { transactions } = useContext(TransactionContext)

  const totalIncome = transactions
    .filter(txn => txn.amount > 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalExpenses = transactions
    .filter(txn => txn.amount < 0)
    .reduce((sum, txn) => sum + txn.amount, 0);

  const totalBalance = totalIncome + totalExpenses;
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your financial overview.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card balance">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Balance</h3>
            <div className="stat-amount"> {totalBalance.toFixed(2)}</div>
          </div>
        </div>

        <div className="stat-card income">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Total Income</h3>
            <div className="stat-amount positive">+ {totalIncome.toFixed(2)}</div>
          </div>
        </div>

        <div className="stat-card expenses">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Total Expenses</h3>
            <div className="stat-amount negative"> {totalExpenses.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <div className="recent-transactions">
        <div className="section-header">
          <h2>Recent Transactions</h2>
          <button className="btn btn-secondary">View All</button>
        </div>

        <div className="transactions-list card">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-info">
                <div className="transaction-title">{transaction.title}</div>
                <div className="transaction-meta">
                  <span className="transaction-category">{transaction.category}</span>
                  <span className="transaction-date">{transaction.date}</span>
                </div>
              </div>
              <div className={`transaction-amount  {transaction.amount > 0 ? 'positive' : 'negative'}`}>
                {transaction.amount > 0 ? '+' : ''} {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
