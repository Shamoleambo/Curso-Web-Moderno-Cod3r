//estrategia 1/ operador OU:
function soma1(a, b, c) {
    a = a || 1;//no caso de vc receber 0 vai resolver pra falso, ERRO!
    b = b || 1;
    c = c || 1;
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

//estrategia 2, 3 e 4:
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;//estrategia 2
    b = 1 in arguments ? b : 1;//existe o elemento de indice 1 em arguments? Se sim, pegue b, se não pegue 1
    c = isNaN(c) ? 1 : c;//essa é a estrategia mais segura
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2("hmm", "hmm", "hmm"));

//valor padrao:
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}