const obj ={
    saudacao: "Saudações, venho em paz!",
    falar(){
        console.log(this.saudacao)
    }
}
obj.falar();

const falar = obj.falar;
falar();//=> this referenciado aqui não é o mesmo que o de obj, por isso ele não encontra a propriedade saudacao
const falarObj = obj.falar.bind(obj);
falarObj();//=> aqui o this aponta para obj