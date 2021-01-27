const arr = [1,2,3,66,13,12,20,10];
let dentro = 0;
let fora = 0;

for(let i=0; i<arr.length; i++){
    
    if(arr[i]>=10 && arr[i]<=20){
        dentro++;
    }else fora++;
}

console.log(dentro, fora);