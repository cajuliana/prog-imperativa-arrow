// transformar functions em arrow functions

//function print(mensagem){
//    console.log(mensagem)
//  }print("Olá, bom dia")

let print = () => console.log("Olá,bom dia!");

print();
   
// function soma(n1, n2){
//    return n1 + n2
//  }   
//  console.log(soma(10, 10))

let somar = (a, b) => a+b;

console.log(somar(10, 10));