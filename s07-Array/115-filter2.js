Array.prototype.filterTiago = function(callback){
    const arr = [];
    for(let i=0; i<this.length;i++){
        if(callback(this[i], i, this)){
            arr.push(this[i]);
        }
    }

    return arr;
}

const teste = [1,2,3,4,5];

console.log(teste.filterTiago(elem => elem>=3.3));