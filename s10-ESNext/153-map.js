const tecnologias = new Map();
tecnologias.set('react', {framework : false});
tecnologias.set('angular', {framework : true});
tecnologias.set(3, true);

console.log(tecnologias.react);
console.log(tecnologias.get(`react`));
console.log(tecnologias.get(3));

const chavesVariadas = new Map([
    [function(){}, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch, vl);
})

console.log(chavesVariadas.has(123));
console.log(chavesVariadas.delete(123));
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b');

console.log(chavesVariadas);