-- SELECT * FROM table_one JOIN joining_table ON pk = fk;

-- one to many or one to one
SELECT * FROM users INNER JOIN posts ON posts.user_id = users.id;
SELECT * FROM posts JOIN users ON user_id = users.id;

-- many to many
SELECT * FROM pizzas JOIN pizzas_have_toppings ON pizza_id = pizzas.id
JOIN toppings ON pizzas_have_toppings.topping_id = toppings.id;

SELECT *, COUNT(toppings.id) as topping_count FROM pizzas JOIN pizzas_have_toppings ON pizza_id = pizzas.id
JOIN toppings ON pizzas_have_toppings.topping_id = toppings.id GROUP BY pizzas.id;

SELECT * FROM users LEFT JOIN posts ON posts.user_id = users.id;
