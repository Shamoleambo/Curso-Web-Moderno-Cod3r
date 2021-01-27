CREATE TABLE IF NOT EXISTS cidades(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL, /*UNSIGNED means it has no signal*/
    area DECIMAL (10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id) /*The column estado_id is the Foreign Key(FK) that references the estados table, stablishing a relationship between them*/
);

CREATE TABLE IF NOT EXISTS cidades(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
);

DROP TABLE IF EXISTS teste;

SELECT * FROM cidades;