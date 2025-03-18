const express = require('express');
const BudgetController = require('../controllers/budgetController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/setBudget', authMiddleware, BudgetController.setBudget);
router.get('/getBudget', authMiddleware, BudgetController.getBudget);

module.exports = router;
