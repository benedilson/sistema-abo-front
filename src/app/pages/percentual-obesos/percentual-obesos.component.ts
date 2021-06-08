import { Component } from '@angular/core';
import { CandidatoService } from 'app/pages/service/candidato.service';

@Component({
  selector: 'percentual-obesos',
  templateUrl: './percentual-obesos.component.html',
  styleUrls: ['./percentual-obesos.component.scss']
})
export class PercentualObesosComponent {

  percentualObesos: number;

  constructor(private candidatoService: CandidatoService) { }

  onChangeSexo(sexo: any) {
    this.candidatoService.getPercentualObesos(sexo)
    .subscribe(res => this.percentualObesos = Number(res));
  }

}
