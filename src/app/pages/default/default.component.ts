import { CandidatoService } from './../service/candidato.service';
import { Component } from '@angular/core';

@Component({
  selector: 'default',
  styleUrls: ['default.component.scss'],
  templateUrl: './default.component.html'
})
export class DefaultComponent {
  quantidadeCandidatoPorEstado: number;
  imcMedioPorIdade: number;
  percentualObesos: number;
  mediaIdadePorTipoSanguineo: number;
  quantidadePossiveisDoadores: number;

  idadeInicial: number;
  idadeFinal: number;

  constructor(
    private candidatoService: CandidatoService
  ) {}

  onChange(sigla: string) {
    this.candidatoService.getQuantidadeCandidatoPorEstado(sigla)
    .subscribe(res => this.quantidadeCandidatoPorEstado = Number(res));
  }

  onChangeSexo(sexo: any) {
    this.candidatoService.getPercentualObesos(sexo)
    .subscribe(res => this.percentualObesos = Number(res));
  }

  onChangeI(idade: string) {
    this.idadeInicial = Number(idade);
  }

  onChangeF(idade: string) {
    this.idadeFinal = Number(idade);
  }

  updateIdade() {
    this.candidatoService.getIMCMedioPorIdade(Number(this.idadeInicial), Number(this.idadeFinal))
    .subscribe(res => this.imcMedioPorIdade = Number(res));
  }

  onChangeTS(tipo_sanguineo: any) {
    this.candidatoService.getMediaIdadeTipoSanguineo(tipo_sanguineo)
    .subscribe(res => this.mediaIdadePorTipoSanguineo = Number(res));
  }

  onChangePossiveisDoadores(tipo_sanguineo: any) {
    this.candidatoService.getQuantidadePossiveisDoadores(tipo_sanguineo)
    .subscribe(res => this.quantidadePossiveisDoadores = Number(res));
  }
}
