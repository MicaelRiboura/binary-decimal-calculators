import { HistoricoService } from './../services/historico.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  buttonMessage: string = 'Mostrar histórico'
  active: boolean = false;
  historico: Array<string> = [];
  mudouHistorico = new EventEmitter();

  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.historico = this.historicoService.getHistorico();
  }

  toggleHistory(): void {
    this.active = !this.active;
    this.active ? this.buttonMessage = 'Esconder histórico' : this.buttonMessage = 'Mostrar histótico'
  }

  clear(): void {
    this.historicoService.limparHistorico();
    this.historico = this.historicoService.getHistorico();
  }

}
