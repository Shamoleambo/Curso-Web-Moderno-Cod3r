const anonimo = process.argv.indexOf('-a') !== -1;

if(anonimo){
    process.stdout.write('Fala Anonimo!\r\n');
    process.exit();
}else{
    process.stdout.write('Informe o seu nome: \r\n');
    process.stdin.on('data', data=>{
        const nome = data.toString().replace('\r\n', '');

        process.stdout.write(`Fala ${nome}`);
        process.exit();
    });
}

