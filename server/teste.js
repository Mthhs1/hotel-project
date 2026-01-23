class pessoa {

    #nome
    #sobrenome
    #nome_completo

    constructor(nome, sobrenome, idade) {

        this.#nome = nome;
        this.#sobrenome = sobrenome
        this.idade = idade

        this.#nome_completo = nome + sobrenome
    }

    getNome() {
        return this.#nome_completo
    }
}
let matheus = new pessoa('Matheus', 'Silva', 24);
console.log(matheus.idade)
console.log(matheus.getNome())