for(let i of "Tiago"){
    console.log(i)
}

const canetas = ['azul', 'preta', 'roxa?']
for(let cor of canetas){
    console.log(cor)
}

const mapJogos = new Map([
    ['Dark Souls', {jogado:true}],
    ['Bioshock', {jogado:true}],
    ['Sekiro', {jogado:false}]
])

for(let arrPar of mapJogos){
    console.log(arrPar)
}
for(let jogo of mapJogos.keys()){
    console.log(jogo)
}
for(let status of mapJogos.values()){
    console.log(status)
}
for(let [ch, vl] of mapJogos.entries()){
    console.log(ch, vl)
}