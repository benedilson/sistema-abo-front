import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { PercentualObesosComponent } from './percentual-obesos/percentual-obesos.component';
import { ImcMedioPorIdadeComponent } from './imc-medio-por-idade/imc-medio-por-idade.component';
import { QuantidadeCandidatoPorEstadoComponent } from './quantidade-candidato-por-estado/quantidade-candidato-por-estado.component';
import { QuantidadePossiveisDoadoresComponent } from './quantidade-possiveis-doadores/quantidade-possiveis-doadores.component';
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Default',
    icon: 'home-outline',
    link: '/pages/default',
    home: true,
  },
  {
    title: 'Quantidade Candidatos UF',
    link: '/pages/QuantidadeCandidatoPorEstadoComponent',
    home: false,
  },
  {
    title: 'IMC Médio Idade',
    link: '/pages/ImcMedioPorIdadeComponent',
    home: false,
  },
  {
    title: 'Percentual Obesos',
    link: '/pages/PercentualObesosComponent',
    home: false,
  },
  {
    title: 'Média Idade Tipo Sanguineo',
    link: '/pages/MediaIdadePorTipoSanguineoComponent',
    home: false,
  },
  {
    title: 'Quantidade Possíveis Doadores',
    link: '/pages/QuantidadePossiveisDoadoresComponent',
    home: false,
  },

];
