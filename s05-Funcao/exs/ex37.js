const progArit = (n, a1, r)=> {

    let proxTermo = a1;
    let soma = a1;
    console.log(a1)
    for(let i=2; i<=n; i++){

        proxTermo +=r;
        soma+=proxTermo;
        console.log(proxTermo);
    }
    console.log(soma);
}

const progGeo = (n, a1, q) => {

    let proxTermo = a1;
    let soma = a1;
    console.log(a1);
    for(let i=2; i<=n; i++){

        proxTermo*=q;
        soma+=proxTermo;
        console.log(proxTermo);
    }

    console.log(soma);
}

progArit(10, 1, 2);
progGeo(10, 1, 2);