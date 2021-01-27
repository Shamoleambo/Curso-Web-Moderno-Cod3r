INSERT INTO cidades
    (nome, area, estado_id)
VALUES
    ('Campinas', 795, 1054);

SELECT * FROM cidades;

-- RJ_ID = 1048

INSERT INTO cidades (nome, area, estado_id)
VALUES
    ('Niterói', 133.9, 1048);

INSERT INTO cidades (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (SELECT id FROM estados WHERE sigla = 'PE')
);

INSERT INTO cidades (nome, area, estado_id)
VALUES(
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
);