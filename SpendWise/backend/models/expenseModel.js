const db = require('../config/db');

const Expense = {
  create: async (userId, amount, category, date) => {
    const [result] = await db.execute(
      'INSERT INTO expenses (user_id, amount, category, date) VALUES (?, ?, ?, ?)',
      [userId, amount, category, date]
    );
    return result;
  },
  findByUserId: async (userId) => {
    const [rows] = await db.execute('SELECT * FROM expenses WHERE user_id = ?', [userId]);
    return rows;
  },
};

module.exports = Expense;
