document.getElementById('setBudgetForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const budgetAmount = document.getElementById('budgetAmount').value;
  const month = document.getElementById('month').value;

  const token = localStorage.getItem('token');
  const response = await fetch('/api/budgets/setBudget', {
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
