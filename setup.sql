-- Create table
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    time_posted TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    title VARCHAR(200) NOT NULL,
    text TEXT NOT NULL,
    image_url VARCHAR(512) NULL,
    likes INTEGER DEFAULT 0
);

-- Add some posts for testing
INSERT INTO posts (time_posted, title, text, image_url) VALUES
('June 30, 2021 16:53', 'Ilusad künkad', 'Leidsin mingi pildi küngastest kuskilt. Päris ilus.', 'https://images.unsplash.com/photo-1429044605642-68283f617432?auto=format&fit=crop&w=1920&q=100'),
('August 12, 2021 15:22', 'Igav on', 'Mõtlesin et postitaks midagi, aga ei viitsi.', NULL),
('September 23, 2021 16:32', 'Olen Pariisis', 'Nägime täna Triumfikaart, sissepakitult. Võimas.', 'https://upload.wikimedia.org/wikipedia/commons/7/70/H%C3%B4tel_de_la_Marine_-_Paris_20210926_182331_%2851520270351%29.jpg'),
('September 30, 2021 10:00', 'On a morning jog', 'Went on a nice morning jog.', 'https://i.ytimg.com/vi/YK3ZptGMauc/maxresdefault.jpg'),
('October 19, 2021 21:06', 'Enne kontrolltööd', 'Istun toolil. Homme on kontrolltöö.', NULL),
('October 21, 2021 19:19', 'Pärast kontrolltööd', 'Istun jälle toolil. Eile oli kontrolltööd.', NULL),
('October 29, 2021 03:11', 'エストニアを訪問', 'とても素敵な国です。残念ながら、私はその言語を理解できません。', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/2016_Flughafen_Tallinn_-_%C3%9Cberflug.jpg/2560px-2016_Flughafen_Tallinn_-_%C3%9Cberflug.jpg'),
('November 1, 2021 14:13', 'Day at university', 'Spending the whole day doing university things today. Have a lecture in two minutes.', NULL),
('November 7, 2021 12:21', 'Day at home', 'Today is Sunday, so I have the day off. It''s nice to get some rest sometimes.', NULL),
('November 10, 2021 04:12', '私は家に帰ってきました', 'ようやく家に帰ってきました。エストニアは良かったですが、自分の家に戻ったのも良かったです。', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/New_Chitose_airport_from_the_sky.JPG')
