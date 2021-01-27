console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Mano', "Bano");
console.log(aprovados);

aprovados = ['Bia', 'Mano', 'Bano'];
console.log(aprovados[0]);

aprovados[10] = "Truta";
console.log(aprovados);

aprovados = ["Mano", "Truta", "Tiu"];
console.log(aprovados);
aprovados.splice(1,2, "Filha da Puta", "Arrombado");
console.log(aprovados);