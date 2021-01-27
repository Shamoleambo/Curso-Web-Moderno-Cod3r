const mediaAluno = (codigo, nota1, nota2, nota3) => {

    let media = (4*nota1 +3*nota2 + 3*nota3)/10;
    console.log(`Aluno ${codigo}: nota1 = ${nota1}; nota2 = ${nota2}; nota3 = ${nota3}; média = ${media}`);
    
    if(media>=5) console.log('APROVADO');
    if(media<5) console.log('REPORVADO');
}

mediaAluno(8928873, 2, 5, 9);