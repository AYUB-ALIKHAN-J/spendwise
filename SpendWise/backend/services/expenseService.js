const ExpenseService = {
  calculateTotal: (expenses) => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  filterByCategory: (expenses, category) => {
    return expenses.filter((expense) => expense.category === category);
  },
};

module.exports = ExpenseService;
