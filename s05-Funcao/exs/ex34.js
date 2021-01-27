const verificaChars = (palavra1, palavra2)=>{
    let arr1 = palavra1.toLowerCase().split('');
    let arr2 = palavra2.toLowerCase().split('');
    let arrBoo1 = [];
    let arrBoo2 = [];

    arr1.forEach(elem1 => arrBoo1.push(arr2.some(elem2 => elem2==elem1)));
    arr2.forEach(elem1 => arrBoo2.push(arr1.some(elem2 => elem2==elem1)));
    return arrBoo1.reduce((acu, atual) => acu && atual) && arrBoo2.reduce((acu, atual) => acu && atual);
}

console.log(verificaChars("Mano", "ManoXYZ"));