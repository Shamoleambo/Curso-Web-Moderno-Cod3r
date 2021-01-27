SELECT * FROM estados e, cidades c; --It will relate both tables by their order, which doesnt reflect their relationship

SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT e.nome, c.nome, e.regiao FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT c.nome AS Nome Cidade,
    e.nome AS Nome Estado,
    e.sigla AS Sigla Estado,
    e.regiao AS Região,
    e.populacao AS População Estado,
    c.area AS Área da Cidade
FROM cidades c, estados 
WHERE c.estado_id = e.id;

/*Ladies and Gentlenmen, I present you the Inner Join!:*/

SELECT c.nome AS Cidade,
    e.nome AS Estado,
    regiao AS Região
FROM estados e
INNER JOIN cidades c ON e.id = c.estado_id;