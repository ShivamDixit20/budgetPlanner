import React, { useContext, useState } from 'react';
import '../css/AddExpence.css';
import { TransactionContext } from '../context/TransactionContext';

const AddExpense = () => {

    const {addTransaction} = useContext(TransactionContext)

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        type: 'expense'
    });

    const categories = [
        'Food & Dining',
        'Transportation',
        'Shopping',
        'Entertainment',
        'Bills & Utilities',
        'Healthcare',
        'Travel',
        'Education',
        'Other'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let finalAmount = parseFloat(formData.amount);
        if (formData.type === 'expense') {
            finalAmount = -Math.abs(finalAmount);
        } else {
            finalAmount = Math.abs(finalAmount);
        }

        const newEntry = {
            ...formData,
            amount: finalAmount
        };
        addTransaction(newEntry)
        console.log('Form submitted:', newEntry);
        alert(`${formData.type === 'expense' ? 'Expense' : 'Income'} added successfully!`);

        setFormData({
            title: '',
            amount: '',
            category: '',
            date: new Date().toISOString().split('T')[0],
            type: 'expense'
        });
    };

    return (
        <div className="add-expense">
            <div className="add-expense-header">
                <h1>Add Transaction</h1>
                <p>Add income or expense to track your financial activity.</p>
            </div>

            <div className="add-expense-content">
                <div className="expense-form-container card">
                    <form className="expense-form" onSubmit={handleSubmit}>
                        {/* Title */}
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">
                                Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-input"
                                placeholder="e.g., Freelance Payment, Grocery Shopping"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Amount + Date */}
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="amount" className="form-label">
                                    Amount ($) *
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    className="form-input"
                                    placeholder="0.00"
                                    step="0.01"
                                    min="0"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date" className="form-label">
                                    Date *
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-input"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Type Selector */}
                        <div className="form-group">
                            <label htmlFor="type" className="form-label">
                                Type *
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="form-select"
                                value={formData.type}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="expense">Expense</option>
                                <option value="income">Income</option>
                            </select>
                        </div>

                        {/* Category */}
                        <div className="form-group">
                            <label htmlFor="category" className="form-label">
                                Category *
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="form-select"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="form-actions">
                            <button type="button" className="btn btn-secondary">
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Add {formData.type === 'income' ? 'Income' : 'Expense'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="expense-tips card">
                    <h3>💡 Quick Tips</h3>
                    <ul className="tips-list">
                        <li>Add both income and expenses to keep your balance accurate</li>
                        <li>Use descriptive titles like “Freelance Project” or “Groceries”</li>
                        <li>Check your category for more accurate reporting</li>
                        <li>Income entries should always be positive values</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AddExpense;
