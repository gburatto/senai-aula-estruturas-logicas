let numeroDeAlunos = 10;

for (let index = 0; index <= numeroDeAlunos; index++) {
    //console.log(index)

    if(index == 0){
        console.log("O número " +index+ " é zero")
    }else if(index %2 == 0){
        console.log("O número " +index+ " é par")
    }else{
        console.log(`O número ${index} é ímpar`)
    }
}