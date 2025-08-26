
let resposta = calculadoraPartidas(300, 50)
console.log(resposta)

classificarVitorias(resposta)

function classificarVitorias(resultado) {
    if (resultado <= 10) {
        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Ferro `)
    } else if ((resultado > 10) && (resultado <= 20)) {

        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Bronze `)
    } else if ((resultado > 20) && (resultado <= 50)) {

        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Prata`)
    } else if ((resultado > 50) && (resultado <= 80)) {

        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Ouro `)
    } else if ((resultado > 80) && (resultado <= 90)) {

        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Diamante `)

    } else if ((resultado > 90) && (resultado <= 100)) {
        console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Lendário `)

    } else if (resultado > 100) {
           console.log(`O herói tem de saldo de vitórias ${resultado} e seu nível atual é Imortal `)

    }

}

function calculadoraPartidas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo
}

