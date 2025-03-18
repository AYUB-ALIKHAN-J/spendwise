INSERT INTO users (name, email, password) VALUES
('John Doe', 'john@example.com', '$2a$10$hashedpassword1'),
('Jane Smith', 'jane@example.com', '$2a$10$hashedpassword2');

INSERT INTO expenses (user_id, amount, category, date) VALUES
(1, 50.00, 'Groceries', '2023-10-01'),
(1, 20.00, 'Transport', '2023-10-02'),
(2, 100.00, 'Shopping', '2023-10-03');

INSERT INTO budgets (user_id, budget_amount, month) VALUES
(1, 500.00, '2023-10'),
(2, 300.00, '2023-10');
