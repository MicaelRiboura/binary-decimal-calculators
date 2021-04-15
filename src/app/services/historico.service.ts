import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private historico: Array<string> = [];
  private expressao: string = '';

  constructor() { }

  setExpressao(expressao: string): void {
    this.expressao = this.expressao + expressao;
  }

  getExpressao(): string {
    return this.expressao;
  }

  setType(type: string) {
    this.expressao = type + this.expressao;
  }

  adicionarAoHistorico(): void {
    this.historico.push(this.expressao);
    this.expressao = '';
  }

  getHistorico(): Array<string> {
    return this.historico;
  }

  limparHistorico(): void {
    this.historico = [];
  }

}
