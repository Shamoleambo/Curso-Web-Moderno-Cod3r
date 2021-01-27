Array.prototype.mapTiago = function(callback){
    const res = [];
    for(let i=0; i<this.length;i++){
        res.push(callback(this[i], i, this));
    }
    return res
}

const nums = [1,2,3,4,5];
console.log(nums.map((e,i,arr) => `${i+1}: ${e*3}  //  ${arr}`));