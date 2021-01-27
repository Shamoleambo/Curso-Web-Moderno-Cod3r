const arr = [10,10,7];

const media = arr.reduce((soma, nota)=>{
    return soma+=nota;
})/arr.length;

console.log(media);