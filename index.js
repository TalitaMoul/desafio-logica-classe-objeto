class heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque = ""
        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "não possui ataque definido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }

    
}

let mago = new heroi("Talita", 22, "mago")
let guerreiro = new heroi("Marcello", 25, "guerreiro")

console.log(mago.atacar())
console.log(guerreiro.atacar())

