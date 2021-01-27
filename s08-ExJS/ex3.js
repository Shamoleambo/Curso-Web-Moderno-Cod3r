const calculoSalario = (horas, taxa) => `Salário igual a R$${(horas*taxa).toFixed(2)}`;

console.log(calculoSalario(10, 100));