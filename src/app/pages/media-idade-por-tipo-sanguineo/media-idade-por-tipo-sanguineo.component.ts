import { Component } from '@angular/core';
import { CandidatoService } from 'app/pages/service/candidato.service';

@Component({
  selector: 'media-idade-por-tipo-sanguineo',
  templateUrl: './media-idade-por-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-por-tipo-sanguineo.component.scss']
})
export class MediaIdadePorTipoSanguineoComponent {

  mediaIdadePorTipoSanguineo: number;

  constructor(private candidatoService: CandidatoService) { }

  onChangeTS(tipo_sanguineo: any) {
    this.candidatoService.getMediaIdadeTipoSanguineo(tipo_sanguineo)
    .subscribe(res => this.mediaIdadePorTipoSanguineo = Number(res));
  }

}
