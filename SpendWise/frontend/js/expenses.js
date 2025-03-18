document.getElementById('addExpenseForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  const token = localStorage.getItem('token');
  const response = await fetch('/api/expenses/addExpense', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount, category, date }),
  });

  if (response.ok) {
    alert('Expense added successfully');
    document.getElementById('addExpenseForm').reset();
    loadExpenses();
  } else {
    alert('Failed to add expense');
  }
});

async function loadExpenses() {
  const token = localStorage.getItem('token');
  const response = await fetch('/api/expenses/getExpenses', {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    const expenses = await response.json();
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach((expense) => {
      const li = document.createElement('li');
      li.textContent = `${expense.date} - ${expense.category}: $${expense.amount}`;
      expenseList.appendChild(li);
    });
  } else {
    alert('Failed to load expenses');
  }
}

if (document.getElementById('expenseList')) {
  loadExpenses();
}
