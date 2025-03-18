const Expense = require('../models/expenseModel');

const ExpenseController = {
  addExpense: async (req, res) => {
    const { amount, category, date } = req.body;
    if (!amount || !category || !date) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    try {
      const result = await Expense.create(req.user.id, amount, category, date);
      res.status(201).json({ message: 'Expense added successfully', expenseId: result.insertId });
    } catch (error) {
      console.error('Error adding expense:', error);
      res.status(500).json({ error: 'Failed to add expense' });
    }
  },
  getExpenses: async (req, res) => {
    try {
      const expenses = await Expense.findByUserId(req.user.id);
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch expenses' });
    }
  },
  deleteExpense: async (req, res) => {
    const { id } = req.params;
    try {
      await Expense.delete(id, req.user.id);
      res.json({ message: 'Expense deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete expense' });
    }
  },
};

module.exports = ExpenseController;
