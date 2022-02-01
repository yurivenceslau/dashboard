let caixaFamiliar = {
    receitas: [2000, 1350, 300],
    despesas: [106, 40, 500, 100]
}
function somar(array){
    let total = 0
    for(let value of array){
        total += value
    }
    return total
}
function calculoTotal(){
    let somaReceitas = somar(caixaFamiliar.receitas)
}
console.log(somar(caixaFamiliar.despesas))
// let notaLetra = ""
// function mudarNota(nota){
//     if(nota >= 90){
//         notaLetra = "A"
//     }else if(nota <= 89 && nota >= 80){
//         notaLetra = "B"
//     }else if(nota <= 79 && nota >= 70){
//         notaLetra = "C"
//     }else if(nota <= 69 && nota >= 60){
//         notaLetra = "D"
//     }else{
//         notaLetra = "F"
//     }
//     return notaLetra
// }
// console.log(mudarNota(25))
// let nome = "Yuri Venceslau"
// for(let letras of nome){
//     console.log(letras)
// }


// let i = 0
// while(i < 10){
//     console.log(i + " não é igual a 10")
//     i++
// }
// console.log(i + " é igual a 10")


// for(let i = 1; i<= 20; i++){
//     if(i/2 == 5){
//         break;
//     }
//     console.log(i)
// }


// let comando = 54

// switch(comando){
//     case 1:
//         console.log("Avançar")
//         break
//     case 2:
//         console.log("Recuar")
//         break
//     case 3:
//         console.log("Reunir")
//         break
//     default:
//         console.log("Comando n encontrado")
//         break
// }

// b ? f1() : f2()

// let MachinegunKick = -8
// let BlazingKick = -16


// if(BlazingKick >-10){
//     console.log("Golpe Não-Punivel")
// }else{
//     console.log("Golpe Punivel")
// }


// let Tracking = true
// let Flicking = false
// let ProPlayer = Tracking && Flicking ? "Vc é foda" :  Tracking || Flicking ? "Vc joga bem" : "Vai treinar"
// console.log(ProPlayer)


// let jogos = "Dark Souls"
// let num_jogo = 3

// console.log(jogos == "Dark Souls")
// console.log(jogos == "Dark_Souls")
// console.log(num_jogo === "3")
// console.log(num_jogo == 3)

// let mains = ["Lee", "Asuka", "Marduk"]
// mains.push("Jack-6")
// mains.unshift("Dragunov")
// mains.push("Anna")
// mains.push("Feng")
// mains.push("Hworang")
// mains.push("Bryan")
// mains.unshift("Jin")
// let index = mains.indexOf("Feng");
// mains.splice(index, 1)
// console.log(mains)