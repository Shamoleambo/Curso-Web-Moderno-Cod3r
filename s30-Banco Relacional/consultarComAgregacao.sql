SELECT 
    regiao as 'Região',
    sum(populacao) as Total --All the population from the same region will be added up
FROM estados
GROUP BY regiao    --Because the select command selected by regiao the group must have region
ORDER BY DESC;  --Descent order

SELECT
    avg(populacao) as 'Média'   --Projects the average of population from the states
FROM estados;

SELECT
    regiao as Região,
    avg(populacao) as Média
FROM estados
GROUP BY regiao
ORDER BY Média;