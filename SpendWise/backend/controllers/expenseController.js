const Expense = require('../models/expenseModel');

const ExpenseController = {
  addExpense: async (req, res) => {
    const { amount, category, date } = req.body;
    try {
      await Expense.create(req.user.id, amount, category, date);
      res.status(201).json({ message: 'Expense added successfully' });
    } catch (error) {
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
