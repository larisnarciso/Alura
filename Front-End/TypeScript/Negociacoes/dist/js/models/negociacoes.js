export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Negociacao[] = []; // alternativa
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // lista(): readonly Negociacao[]{ // alternativa
        return this.negociacoes;
    }
}
