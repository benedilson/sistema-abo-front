import { QuantidadePossiveisDoadoresComponent } from './quantidade-possiveis-doadores/quantidade-possiveis-doadores.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PercentualObesosComponent } from './percentual-obesos/percentual-obesos.component';
import { ImcMedioPorIdadeComponent } from './imc-medio-por-idade/imc-medio-por-idade.component';
import { QuantidadeCandidatoPorEstadoComponent } from './quantidade-candidato-por-estado/quantidade-candidato-por-estado.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DefaultComponent } from './default/default.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      component: DefaultComponent,
    },
    {
      path: 'default',
      component: DefaultComponent,
    },
    {
      path: 'QuantidadeCandidatoPorEstadoComponent',
      component: QuantidadeCandidatoPorEstadoComponent,
    },
    {
      path: 'ImcMedioPorIdadeComponent',
      component: ImcMedioPorIdadeComponent,
    },
    {
      path: 'PercentualObesosComponent',
      component: PercentualObesosComponent,
    },
    {
      path: 'MediaIdadePorTipoSanguineoComponent',
      component: MediaIdadePorTipoSanguineoComponent,
    },
    {
      path: 'QuantidadePossiveisDoadoresComponent',
      component: QuantidadePossiveisDoadoresComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
