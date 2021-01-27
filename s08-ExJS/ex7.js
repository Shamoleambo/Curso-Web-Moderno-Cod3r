const intervalo = (num, min, max, ouIgual) => {
    if(min>max) [min, max] = [max, min];
    if(ouIgual){

        if(num<= max && num>=min){

            return true;
        }else return false;
    }else{

        if(num<max && num>min){

            return true;
        }else return false;
    }
}

console.log(intervalo(152, 7, 17, true));