const precoPlanoDeSaude = idade => {
    if(idade<10) return 100+80;
    if(idade<30) return 100+50;
    if(idade<60) return 100+95;
    if(idade>=60) return 100+130;
}

console.log(precoPlanoDeSaude(2));
console.log(precoPlanoDeSaude(20));
console.log(precoPlanoDeSaude(40));
console.log(precoPlanoDeSaude(64));