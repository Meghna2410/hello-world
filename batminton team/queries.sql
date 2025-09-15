
-- 1. Get all players from India
SELECT * FROM badminton_team WHERE country = 'India';

-- 2. Find players ranked in the top 5
SELECT name, country, ranking FROM badminton_team WHERE ranking <= 5 ORDER BY ranking;

-- 3. Count how many players are Singles vs Doubles
SELECT role, COUNT(*) AS total_players FROM badminton_team GROUP BY role;

-- 4. Get the oldest player
SELECT name, age FROM badminton_team ORDER BY age DESC LIMIT 1;

-- 5. Find average ranking by country
SELECT country, AVG(ranking) AS avg_rank FROM badminton_team GROUP BY country;
