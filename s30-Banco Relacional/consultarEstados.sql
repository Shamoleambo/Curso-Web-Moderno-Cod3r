SELECT * FROM estados;

SELECT sigla, nome AS 'Nome do Estado' FROM estados
    WHERE regiao='Sul';

SELECT nome, sigla FROM estados 
WHERE populacao>=10
ORDER BY populacao DESC; --DESC applies the order as descent