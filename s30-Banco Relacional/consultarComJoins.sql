SELECT
    c.nome AS `City Name`,
    p.nome AS `Mayor`
FROM cidades c
INNER JOIN prefeitos p
ON p.cidade_id = c.id;

SELECT
    c.nome AS `City Name`,
    p.nome AS `Mayor`
FROM cidades c
LEFT JOIN prefeitos p
ON c.id = p.cidade_id;

SELECT 
    c.nome AS `City Name`,
    p.nome AS `Mayor`
FROM cidades c
RIGHT JOIN prefeitos p
ON c.id = p.cidade_id;

/*The query below is the exact same thing as LEFT JOIN*/
SELECT
    c.name AS `City Name`,
    p.name AS `Mayor`
FROM cidades c
LEFT OUTER JOIN prefeitos p
ON c.id = p.cidade_id;


/*MySQL has no support for FULL JOIN
The workaround is to use the UNION command to unify the queries RIGHT JOIN and LEFT JOIN
*/
SELECT
    c.nome AS `City Name`,
    p.nome AS `Mayor`
FROM cidades c
LEFT JOIN `prefeitos` p
ON c.id = p.cidade_id
UNION
SELECT
    c.nome AS `City Name`,
    p.nome AS `Mayor`
FROM cidades c
RIGHT JOIN `prefeitos` p
ON c.id = p.cidade_id;