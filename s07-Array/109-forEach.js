const manos = ['Mano', 'Truta', 'Tiu', 'Fi'];

manos.forEach(function(nome, indice){
    console.log(`${indice+1} : ${nome}`);
})

manos.forEach(nome => console.log(nome));

const exibirAprovados = (aprovado, indice, arr) => console.log(aprovado, indice, arr);

manos.forEach(exibirAprovados);