const objPai = { nome: 'Pai', corOlhos: 'Azul' }

const filha1 = Object.create(objPai);
filha1.nome = 'Mana';
const filha2 = Object.create(objPai, {
    nome: { value: 'Bana', writable: false, enumerable: true }
});
console.log(filha2.nome);
filha2.nome = 'Não';//NÃO pode ser sobrescrito
console.log(`${filha2.nome} tem os olhos ${filha2.corOlhos}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(`${key} é ownProperty`) : console.log(`${key} não é ownProperty`);
}

const objF = Object.create(objP, {
    prop1: { value: '...', writable: true, enumerable: false },
    prop2: { value: '...', writable: false, enumerable: true }
});