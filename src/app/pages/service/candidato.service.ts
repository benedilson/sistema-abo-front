import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private httpClient: HttpClient) { }

  getQuantidadeCandidatoPorEstado(estado: string) {
    return this.httpClient.get(`${environment.url}/candidatos/filterquantidadeporestado?estado=${estado}`);
  }

  getIMCMedioPorIdade(idadeInicial: number, idadeFinal: number) {
    return this.httpClient.get(`${environment.url}/candidatos/filteridade?idadeinicial=
    ${Number(idadeInicial)}&idadefinal=${Number(idadeFinal)}`);
  }

  getPercentualObesos(sexo: any) {
    return this.httpClient.get(`${environment.url}/candidatos/filterpercentualobesos?sexo=${sexo}`);
  }

  getMediaIdadeTipoSanguineo(tipo_sanguineo: any) {
    return this.httpClient.get(`${environment.url}/candidatos/filtermediaidadetiposanguineo?tiposanguineo=${tipo_sanguineo}`);
  }

  getQuantidadePossiveisDoadores(tipo_sanguineo: any) {
    return this.httpClient.get(`${environment.url}/candidatos/filterquantidadepossiveisdoadores?tiposanguineo=${tipo_sanguineo}`);
  }
}
