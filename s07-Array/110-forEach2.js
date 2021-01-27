Array.prototype.forEachTiago = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this);
    }
}

const manos = ['Mano', 'Truta', 'Tiu', 'Fi'];

manos.forEachTiago((nome, ind, arr) => console.log(nome, ind, arr));