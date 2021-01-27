const caneta = new Object;
caneta.marca = "Bic";
caneta.tipo = "Esferográfica";
caneta['cor da caneta'] = "Azul";

console.log(caneta);
delete caneta['cor da caneta'];
console.log(caneta);