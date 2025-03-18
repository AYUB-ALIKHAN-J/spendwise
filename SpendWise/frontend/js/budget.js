const BASE_URL = 'http://localhost:5000';

document.getElementById('setBudgetForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const budgetAmount = document.getElementById('budgetAmount').value;
  const month = document.getElementById('month').value;

  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/api/budgets/setBudget`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ budgetAmount, month }),
  });

  if (response.ok) {
    alert('Budget set successfully');
    document.getElementById('setBudgetForm').reset();
  } else {
    alert('Failed to set budget');
  }
});

async function loadBudget() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/api/budgets/getBudget`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    const budgets = await response.json();
    const totalBudget = budgets.reduce((sum, budget) => sum + parseFloat(budget.budget_amount), 0);
    const totalExpenses = parseFloat(document.getElementById('totalExpenses').textContent.replace('$', '')) || 0;

    const remainingBudget = totalBudget - totalExpenses;
    document.getElementById('remainingBudget').textContent = `$${remainingBudget.toFixed(2)}`;
  } else {
    alert('Failed to load budget');
  }
}

if (document.getElementById('remainingBudget')) {
  loadBudget();
}
