const classificacaoTriangulo = (a,b,c) => a==b==c ? "Equilátero" : a==b || b==c || a==c ? "Isóceles" : "Escaleno";

console.log(classificacaoTriangulo(3,2,1));