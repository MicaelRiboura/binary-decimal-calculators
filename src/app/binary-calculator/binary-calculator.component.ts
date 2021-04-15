import { Component, OnInit } from '@angular/core';
import { HistoricoService } from './../services/historico.service';

@Component({
  selector: 'app-binary-calculator',
  templateUrl: './binary-calculator.component.html',
  styleUrls: ['./binary-calculator.component.css']
})
export class BinaryCalculatorComponent implements OnInit {

  valorVisor: string = '0';
  limpaVisor: boolean = false;
  operacao: string = '';
  valores: Array<number> = [0, 0];
  indiceAtual: number = 0;
  ultimaExpressao: string = '';

  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    
  }

  limparVisor() {
    this.valorVisor = '0';

  }

  resetar(){
    this.valorVisor ='0';
    this.limpaVisor = false;
    this.operacao = '';
    this.valores = [0,0];
    this.indiceAtual = 0;
    this.ultimaExpressao = '';
  }

  adicionarDigito(digito: string) {
    const limpaVisor: boolean = this.valorVisor == '0' || this.limpaVisor;
    const valorAtual: string = limpaVisor ? '' : this.valorVisor;
    this.valorVisor = valorAtual + digito;
    this.limpaVisor = false;

    const novoValor: number = parseInt(this.valorVisor, 2);
    console.log(novoValor);
    this.valores[this.indiceAtual] = novoValor;
  }

  executaOperacao(operacao: string): number{
    switch (operacao) {
      case '+':
        return this.valores[0] + this.valores[1];
      case '-': 
        return this.valores[0] - this.valores[1];
      case '*':  
        return this.valores[0] * this.valores[1];
      case '/':
        return this.valores[0] / this.valores[1];
    }

    return 0;
  }


  setOperacao(operacao: string) {
    if (this.indiceAtual == 0) {

      this.operacao = operacao;
      this.indiceAtual = 1;
      this.limpaVisor = true;
      this.historicoService.setExpressao(this.valores[0].toString(2) + operacao);

    } else {

      const operacaoAtual = this.operacao;

      this.limpaVisor = true;
      this.historicoService.setExpressao(this.valores[1].toString(2) + operacao);
      this.valores[0] = this.executaOperacao(operacaoAtual);
      this.valores[1] = 0;

      const igual = operacao === '=';
      this.valorVisor = this.valores[0].toString(2);
      this.operacao = igual ? '' : this.operacao;
      this.indiceAtual = igual ? 0 : 1;
      if(igual) {
        this.ultimaExpressao = this.historicoService.getExpressao();
        this.historicoService.setExpressao(this.valores[0].toString(2));
        this.historicoService.setType('Calculadora Binária: ');
        this.historicoService.adicionarAoHistorico();
      }

    }
  }

}
