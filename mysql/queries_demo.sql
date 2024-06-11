-- INSERT INTO table_name (column_name1, column_name2) 
-- VALUES('column1_value', 'column2_value');
-- insert no relationship
INSERT INTO users (name,email,age)
VALUES ('Spencer','spencer@email.com',36),
('David','dave@email.com',37);
-- insert 1:1 or 1:M
INSERT INTO posts (body,user_id)
VALUES ('This is my post, rad post',2);

INSERT INTO pizzas (size, sauce_type)
VALUES (10, 'alfredo'), (12,'pesto'), (14,'marinara');

INSERT INTO toppings (is_veg, name)
VALUES (1,'green peppers'), (0,'sausage'),(1,'spinach'),(1,'onions'),(0,'pepporni');

-- many to many insert
INSERT INTO pizzas_have_toppings (pizza_id, topping_id)
VALUES (1,3),(1,4);


-- SELECT columns_selected, second_column, * FROM table_name
-- WHERE condition;

SELECT * FROM users;

SELECT email, name FROM users
WHERE id = 2;

SELECT *, MONTH(created_at) AS month_joined FROM users;

SELECT * FROM toppings ORDER BY name DESC;

-- UPDATE table_name
-- SET column1 = value1, column2 = value2, ...
-- WHERE condition;

UPDATE users
SET name = 'Bobby', email = 'bobby@bob.com', updated_at = NOW()
WHERE id = 2;

-- DELETE FROM table_name WHERE condition;
DELETE FROM toppings WHERE id = 5;

DELETE FROM users WHERE id = 2;
