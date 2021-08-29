//Laços de contagem de alunos 

let numeroAlunos = 10;

for (let contador = 0; contador <= numeroAlunos; contador++) {
  //console.log(contador)

  if (contador == 0) {
      console.log("O número atual é zero") 
  } else if (contador % 2 ==0){
      console.log(`O número ${contador} é PAR`)
  } else{
      console.log(`O número ${contador} é IMPAR`)
  }
}



//Estudo feito apenas em carater de prática

// let ListaAlunos = ["Joao", "Pedro", "Maria", "Luisa"]
//FOR OF
// for (let nome of ListaAlunos) {
//     console.log(`O nome desta pessoa é ${nome}`)
// }

//FOR EACH
// ListaAlunos.forEach(lista => {
// console.log(`O nome é ${lista}`)
// });