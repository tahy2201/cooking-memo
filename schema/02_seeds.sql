INSERT INTO recipes 
    (title, thumbnail, description, ingredients, process, src_link, owner_id, create_at, update_at)
VALUES
('Pizza', 'pizza.jpg', 'オーソドックスなピザ', '[{"name":"トマト","amount":1, "unit": "個"}, {"name":"チーズ","amount":2,"unit":"枚"}, {"name":"塩","amount":3,"unit":"大さじ"}]', '["Put the dough in the oven",  "Bake for 20 minutes" ]', 'https://srclink/example', 1, '2022-01-01 00:00:00', '2020-01-03 00:00:00'),
('Pasta', 'pizza.jpg', 'コスパ重視なパスタ', '[{"name":"トマト","amount":1, "unit": "個"}, {"name":"チーズ","amount":2,"unit":"枚"}, {"name":"塩","amount":3,"unit":"大さじ"}]', '["Put the dough in the oven",  "Bake for 20 minutes" ]', 'https://srclink/example', 1, '2022-02-01 00:00:00', '2020-02-03 00:00:00'),
('curry', 'pizza.jpg', 'かれー', '[{"name":"トマト","amount":1, "unit": "個"}, {"name":"チーズ","amount":2,"unit":"枚"}, {"name":"塩","amount":3,"unit":"大さじ"}]', '["Put the dough in the oven",  "Bake for 20 minutes" ]', 'https://srclink/example', 1, '2022-03-01 00:00:00', '2020-03-03 00:00:00'),
('ramen', 'pizza.jpg', '普通の醤油ラーメンだよ', '[{"name":"トマト","amount":1, "unit": "個"}, {"name":"チーズ","amount":2,"unit":"枚"}, {"name":"塩","amount":3,"unit":"大さじ"}]', '["Put the dough in the oven",  "Bake for 20 minutes" ]', 'https://srclink/example', 2, '2022-04-01 00:00:00', '2020-04-11 00:00:00'),
('ごまだんご', 'pizza.jpg', 'それなりにあんこがはいったゴマ団子', '[{"name":"トマト","amount":1, "unit": "個"}, {"name":"チーズ","amount":2,"unit":"枚"}, {"name":"塩","amount":3,"unit":"大さじ"}]', '["Put the dough in the oven",  "Bake for 20 minutes" ]', 'https://srclink/example', 2, '2022-05-01 00:00:00', '2020-05-03 00:00:00')
;

INSERT INTO users
    (login_id, name, thumbnail, first_name, last_name, profile, create_at, update_at)
VALUES
('admin', 'th.jpeg', 'admin', 'admin_first', 'admin_last', 'admin_prof', '2020-01-01 00:00:00', '2020-01-01 00:00:00'),
('user', 'th.jpeg', 'user', 'user_first', 'user_last', 'user_prof', '2020-01-01 00:00:00', '2020-01-01 00:00:00')
;
