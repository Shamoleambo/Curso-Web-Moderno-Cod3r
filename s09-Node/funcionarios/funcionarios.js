const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
    const mulheresChinesaMenorSalario = funcionarios
        .filter((pessoa)=>pessoa.genero=='F' && pessoa.pais=='China')
        .reduce((acu, atual) => acu.salario > atual.salario ? atual : acu);
    console.log(mulheresChinesaMenorSalario);
});