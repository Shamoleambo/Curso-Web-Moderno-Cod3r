const numeroDeNotas = valor =>{
    let contador = 0;
    let resp = '';

    while(valor>=100){

        valor-=100;
        contador++;
    }
    if(contador) resp+= `${contador} nota(s) de R$100,00; `;
    contador = 0;

    while(valor>=50){

        valor-=50;
        contador++;
    }
    if(contador) resp+= `${contador} nota(s) de R$50,00; `;
    contador = 0;

    while(valor>=10){

        valor-=10;
        contador++;
    }
    if(contador) resp+= `${contador} nota(s) de R$10,00; `;
    contador = 0;

    while(valor>=5){

        valor-=5;
        contador++;
    }
    if(contador) resp+= `${contador} nota(s) de R$5,00; `;
    contador = 0;

    while(valor>=1){

        valor-=1;
        contador++;
    }
    if(contador) resp+= `${contador} nota(s) de R$1,00; `;
    contador = 0;
    

    return resp;
}

console.log(numeroDeNotas(187));