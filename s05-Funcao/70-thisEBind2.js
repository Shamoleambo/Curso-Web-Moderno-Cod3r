 function Pessoa(){
     this.idade = 0;

     const self = this;
     setInterval(function (){
         self.idade++;
         console.log(self.idade);
     }.bind(this),1000)
 }
 new Pessoa();

function Pessoa2(){
    this.idade = 0;
    const self = this;
    setInterval(function (){
        self.idade++;
        console.log(self.idade);
    },1000)
}
new Pessoa2();

//Arrow function
function Pessoa3(){
    this.idade = 0;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000)
}
new Pessoa3();