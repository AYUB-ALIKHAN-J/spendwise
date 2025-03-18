const express = require('express');
const ExpenseController = require('../controllers/expenseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/addExpense', authMiddleware, ExpenseController.addExpense);
router.get('/getExpenses', authMiddleware, ExpenseController.getExpenses);
router.delete('/deleteExpense/:id', authMiddleware, ExpenseController.deleteExpense);

module.exports = router;
