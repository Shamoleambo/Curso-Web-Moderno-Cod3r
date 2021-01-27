const crescimentoCriancas = (alturaCrianca1, alturaCrianca2, taxa1, taxa2) =>{
    if(alturaCrianca1<alturaCrianca2){

        if(taxa1>taxa2){

            let anos = 0;
            while(alturaCrianca1<alturaCrianca2){
            alturaCrianca1 *= (1+taxa1);
            alturaCrianca2 *= (1+taxa2);
            anos++;
            }
            return `A criança 1 é a menor e ultrapassará a criança 2 em ${anos} ano(s).`;
        }else{

            return `A criança 1 é menor que a criança 2, porém ela não à ultrapassará.`;
        }



    }else if(alturaCrianca2<alturaCrianca1){

        if(taxa2>taxa1){

            let anos = 0;
            while(alturaCrianca2<alturaCrianca1){
            alturaCrianca1 *= (1+taxa1);
            alturaCrianca2 *= (1+taxa2);
            anos++;
            }
            return `A criança 2 é a menor e ultrapassará a criança 1 em ${anos} ano(s).`;

        }else{

            return `A criança 2 é menor que a criança 1, porém ela não à ultrapassará.`;
        }
    }else{
        return "As duas crianças possuem a mesma altura";
    }
}

console.log(crescimentoCriancas(110, 100, .4, .2));