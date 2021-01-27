const booNum = (booNum) => {
    if(typeof booNum == "boolean"){
        if(booNum) return false;
        return true;
    }else if(typeof booNum == "number"){
        return booNum*-1;
    }else return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof booNum}`;
}

console.log(booNum(true));