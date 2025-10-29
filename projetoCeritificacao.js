class Atletas{
    constructor(nome, notas){
        this.nome = nome
        this.notas = notas
    }
    // Função para adicionar nota e validar se é maior que 1 ou menor que zero
    adicionarNotas(valorNota){
        if(valorNota > 10 || valorNota < 0) return 
        this.notas.push(valorNota)  
    }
    //Função para exibir Nome
    exibirNome(){
        return this.nome
    }
    //Função para exibir as notas 
    obterNotas(){
       return this.notas.slice().sort((a, b) => a - b) 
    }
    // Função para calcular a média das notas do usuário
    calcularMedia(){
       let notasValidas = this.obterNotas().slice(1,4)
       let soma = notasValidas.reduce(function(acc, total){
            return acc + total
        }, 0)
        return soma / notasValidas.length
    }
}

// Entrada dos nomes dos atletas e das suas respectivas notas
let atletas = [
  new Atletas("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]),
  new Atletas("Fernando Puntel", [8, 10, 10, 7, 9.33]),
  new Atletas("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]),
  new Atletas("Bruno Castro", [10, 10, 10, 9, 9.5]),
];

// Loop para que eu consiga exibir os atletas, suas notas e a sua média
atletas.forEach(function(atleta){
    console.log(`Atleta: ${atleta.exibirNome()}`)
    console.log(`Notas Obtidas: ${atleta.notas.join(", ")} `)
    console.log(`Média Válida: ${atleta.calcularMedia().toFixed(2)}`)
    console.log(" ")
})