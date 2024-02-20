import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];
  // private negociacoes: Negociacao[] = []; // alternativa

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    // lista(): readonly Negociacao[]{ // alternativa
    return this.negociacoes;
  }
}
