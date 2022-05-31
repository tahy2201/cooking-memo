INSERT INTO recipes 
    (title, thumbnail, ingredients, process, owner_id, create_date, update_date)
VALUES
('Pizza', 'pizza.jpg', 'tomato, cheese, dough', '{ "step1": "Put the dough in the oven", "step2": "Bake for 20 minutes" }', 1, '2022-01-01 00:00:00', '2020-01-03 00:00:00'),
('Pasta', 'pizza.jpg', 'tomato, cheese, dough', '{ "step1": "Put the dough in the oven", "step2": "Bake for 20 minutes" }', 1, '2022-02-01 00:00:00', '2020-02-03 00:00:00'),
('curry', 'pizza.jpg', 'tomato, cheese, dough', '{ "step1": "Put the dough in the oven", "step2": "Bake for 20 minutes" }', 1, '2022-03-01 00:00:00', '2020-03-03 00:00:00'),
('ramen', 'pizza.jpg', 'tomato, cheese, dough', '{ "step1": "Put the dough in the oven", "step2": "Bake for 20 minutes" }', 2, '2022-04-01 00:00:00', '2020-04-11 00:00:00'),
('ごまだんご', 'pizza.jpg', 'tomato, cheese, dough', '{ "step1": "Put the dough in the oven", "step2": "Bake for 20 minutes" }', 2, '2022-05-01 00:00:00', '2020-05-03 00:00:00');

INSERT INTO users
    (logim_id, name, thumbnail, first_name, last_name, profile, create_date, update_date)
VALUES
('admin', 'th.jpeg', 'admin', 'admin_first', 'admin_last', 'admin_prof', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
('user', 'th.jpeg', 'user', 'user_first', 'user_last', 'user_prof', '2020-01-01 00:00:00', '2020-01-01 00:00:00');
