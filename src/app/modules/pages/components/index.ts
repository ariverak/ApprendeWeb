import {HomeComponent} from './home/home.component';
import {MensajeriaComponent} from './mensajeria/mensajeria.component';
import {planContenidosComponents} from './plan-contenidos/';

export const pagesComponents = [
    HomeComponent,
    MensajeriaComponent,
    ...planContenidosComponents
]