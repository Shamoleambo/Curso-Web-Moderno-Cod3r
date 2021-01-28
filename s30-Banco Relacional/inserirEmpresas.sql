INSERT INTO empresas
    (nome, cnpj)
VALUES
    ("Bradesco", 19969271000188),
    ("Vale", "00878072000136"),
    ("Cielo", "16796385000185");

/*Altering the type of data in the attribute column cnpj from the table empresas*/
ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);
