//Não aceita repetição e não é indexado

const times = new Set()
times.add('São Paulo')
times.add('Palmeiras').add('Santos')
times.add('São Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Palmeiras')
console.log(times.has('Palmeiras'))

const nomes = ['Tiago', 'Amanda', 'Jimmy', 'Mochi', 'Mochi']
const nomesSet = new Set(nomes)
console.log(nomesSet)