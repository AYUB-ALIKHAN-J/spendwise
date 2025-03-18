const db = require('../config/db');

const Budget = {
  create: async (userId, budgetAmount, month) => {
    const [result] = await db.execute(
      'INSERT INTO budgets (user_id, budget_amount, month) VALUES (?, ?, ?)',
      [userId, budgetAmount, month]
    );
    return result;
  },
  findByUserId: async (userId) => {
    const [rows] = await db.execute('SELECT * FROM budgets WHERE user_id = ?', [userId]);
    return rows;
  },
};

module.exports = Budget;
