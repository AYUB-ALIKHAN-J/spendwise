const Validators = {
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  validatePassword: (password) => {
    return password.length >= 6;
  },
  validateBudgetAmount: (amount) => {
    return amount > 0;
  },
};

module.exports = Validators;
