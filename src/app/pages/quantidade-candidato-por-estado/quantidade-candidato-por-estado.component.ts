import { Component } from '@angular/core';
import { CandidatoService } from 'app/pages/service/candidato.service';

@Component({
  selector: 'quantidade-candidato-por-estado',
  templateUrl: './quantidade-candidato-por-estado.component.html',
  styleUrls: ['./quantidade-candidato-por-estado.component.scss']
})
export class QuantidadeCandidatoPorEstadoComponent {

  quantidadeCandidatoPorEstado: number;

  constructor(private candidatoService: CandidatoService) { }

  onChange(sigla: string) {
    this.candidatoService.getQuantidadeCandidatoPorEstado(sigla)
    .subscribe(res => this.quantidadeCandidatoPorEstado = Number(res));
  }

}
