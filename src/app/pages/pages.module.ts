import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DefaultdModule } from './default/default.module';
import { QuantidadeCandidatoPorEstadoComponent } from './quantidade-candidato-por-estado/quantidade-candidato-por-estado.component';
import { ImcMedioPorIdadeComponent } from './imc-medio-por-idade/imc-medio-por-idade.component';
import { PercentualObesosComponent } from './percentual-obesos/percentual-obesos.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { QuantidadePossiveisDoadoresComponent } from './quantidade-possiveis-doadores/quantidade-possiveis-doadores.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DefaultdModule,

  ],
  declarations: [
    PagesComponent,
    QuantidadeCandidatoPorEstadoComponent,
    ImcMedioPorIdadeComponent,
    PercentualObesosComponent,
    MediaIdadePorTipoSanguineoComponent,
    QuantidadePossiveisDoadoresComponent,
  ],
})
export class PagesModule {
}
