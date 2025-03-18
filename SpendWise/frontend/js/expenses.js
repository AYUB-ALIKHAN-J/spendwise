const BASE_URL = 'http://localhost:5000';

document.getElementById('addExpenseForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;nt').value);
  const category = document.getElementById('category').value;trim();
  const date = document.getElementById('date').value;

  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/api/expenses/addExpense`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,oken');
    },{
    body: JSON.stringify({ amount, category, date }),enses/addExpense`, {
  }); method: 'POST',
      headers: {
  if (response.ok) {e': 'application/json',
    alert('Expense added successfully');,
    document.getElementById('addExpenseForm').reset();
    loadExpenses();ringify({ amount, category, date }),
  } else {
    alert('Failed to add expense');
  } if (response.ok) {
});   alert('Expense added successfully');
      document.getElementById('addExpenseForm').reset();
async function loadExpenses() {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/api/expenses/getExpenses`, {ror}`);
      headers: { Authorization: `Bearer ${token}` },
    });  } catch (error) {
rror adding expense:', error);
    if (response.ok) {he expense');
      const expenses = await response.json();
      const expenseList = document.getElementById('expenseList');
      const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

      document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;tItem('token');
      expenseList.innerHTML = '';ASE_URL}/api/expenses/getExpenses`, {
      expenses.forEach((expense) => {` },
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${expense.date} - ${expense.category}: $${expense.amount}</span>esponse.ok) {
          <button onclick="deleteExpense(${expense.id})">Delete</button>expenses = await response.json();
        `;lementById('expenseList');
        expenseList.appendChild(li); const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
      });
    } else {    document.getElementById('totalExpenses').textContent = `$${totalExpenses.toFixed(2)}`;
      alert('Failed to load expenses');
    }ach((expense) => {
  } catch (error) {     const li = document.createElement('li');
    console.error('Error loading expenses:', error);      li.textContent = `${expense.date} - ${expense.category}: $${expense.amount}`;





























}  loadExpenses();if (document.getElementById('expenseList')) {}  }    alert('An error occurred while deleting the expense');    console.error('Error deleting expense:', error);  } catch (error) {    }      alert(`Failed to delete expense: ${errorData.error}`);      const errorData = await response.json();    } else {      loadExpenses();      alert('Expense deleted successfully');    if (response.ok) {    });      headers: { Authorization: `Bearer ${token}` },      method: 'DELETE',    const response = await fetch(`${BASE_URL}/api/expenses/deleteExpense/${expenseId}`, {  try {  const token = localStorage.getItem('token');async function deleteExpense(expenseId) {}  }    alert('An error occurred while loading expenses');      expenseList.appendChild(li);
    });
  } else {
    alert('Failed to load expenses');
  }
}

if (document.getElementById('expenseList')) {
  loadExpenses();
}
