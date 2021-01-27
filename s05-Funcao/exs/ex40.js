const conceitoNotas = notas => notas.map(nota=> nota<5 && nota>=0 ? "D" 
    : nota<7 && nota>=5 ? "C"
        : nota<9 && nota>=7 ? "B" : "A");

const notas = [1,2,3,4,5,6,7,8,9,10];
const conceitos = conceitoNotas(notas);
console.log(conceitos);