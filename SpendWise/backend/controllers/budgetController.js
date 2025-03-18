const Budget = require('../models/budgetModel');

const BudgetController = {
  setBudget: async (req, res) => {
    const { budgetAmount, month } = req.body;
    try {
      await Budget.create(req.user.id, budgetAmount, month);
      res.status(201).json({ message: 'Budget set successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to set budget' });
    }
  },
  getBudget: async (req, res) => {
    try {
      const budgets = await Budget.findByUserId(req.user.id);
      res.json(budgets);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch budget' });
    }
  },
};

module.exports = BudgetController;
