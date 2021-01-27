//rest => pra juntar e spread pra espalhar

//spread com objetos:
const funcionario = {nome: "Maria", salario:12348.99};
const clone = {ativo:true, ...funcionario};
console.log(clone);

//spread com array:
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', 'Rafaela', ...grupoA];
console.log(grupoFinal);