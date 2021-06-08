import { Component } from '@angular/core';
import { CandidatoService } from 'app/pages/service/candidato.service';

@Component({
  selector: 'quantidade-possiveis-doadores',
  templateUrl: './quantidade-possiveis-doadores.component.html',
  styleUrls: ['./quantidade-possiveis-doadores.component.scss']
})
export class QuantidadePossiveisDoadoresComponent {

  quantidadePossiveisDoadores: number;

  constructor(private candidatoService: CandidatoService) { }

  onChangePossiveisDoadores(tipo_sanguineo: any) {
    this.candidatoService.getQuantidadePossiveisDoadores(tipo_sanguineo)
    .subscribe(res => this.quantidadePossiveisDoadores = Number(res));
  }

}
