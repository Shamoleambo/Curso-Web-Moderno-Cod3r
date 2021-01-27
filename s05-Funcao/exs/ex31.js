const arr = [-3,2,-1,4];

const qtdeNegativos = arr.reduce((negativos, atual)=>{
    if(atual<0) negativos++;
    return negativos;
},0);

console.log(qtdeNegativos);