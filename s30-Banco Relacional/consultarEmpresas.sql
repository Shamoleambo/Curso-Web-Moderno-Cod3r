SELECT e.nome, c.nome, eu.sede
FROM cidades c, empresas e, empresas_unidades eu
WHERE
    c.id = eu.cidade_id AND e.id = eu.empresa_id;

SELECT
    e.nome AS `Empresas`,
    c.nome AS `Cidade`,
    eu.sede AS `Sede`
FROM empresas e, cidades c
INNER JOIN empresas_unidades eu
ON e.id = eu.empresa_id AND c.id = eu.cidade_id;