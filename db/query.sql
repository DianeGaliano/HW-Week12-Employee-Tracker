SELECT department.name AS department, roles.role
FROM roles
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
