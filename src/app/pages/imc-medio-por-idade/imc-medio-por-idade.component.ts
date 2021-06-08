import { Component } from '@angular/core';
import { CandidatoService } from 'app/pages/service/candidato.service';

@Component({
  selector: 'imc-medio-por-idade',
  templateUrl: './imc-medio-por-idade.component.html',
  styleUrls: ['./imc-medio-por-idade.component.scss']
})
export class ImcMedioPorIdadeComponent {

  imcMedioPorIdade: number;
  idadeInicial: number;
  idadeFinal: number;
  
  constructor(private candidatoService: CandidatoService) { }

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

}
