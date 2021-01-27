const nums = [1,2,3,4,5];

let resultado = nums.map(function (e){
    return e*2;
});

console.log(resultado, nums);

const soma10 = elem => elem +10;
const triplo = elem => elem*3;
const paraDinheiro = elem => `R$${elem.toFixed(2).replace('.',',')}`;

console.log(nums.map(soma10).map(triplo).map(paraDinheiro));