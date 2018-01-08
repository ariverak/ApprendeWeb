import {HomeComponent} from './home/home.component';
import {MensajeriaComponent} from './mensajeria/mensajeria.component';
export {ModalComponent} from './mensajeria/modal/modal.component';
import { CKEditorComponent } from './mensajeria/editor/editor.component';
import {planContenidosComponents} from './plan-contenidos/';

export const pagesComponents = [
    HomeComponent,
    MensajeriaComponent,
    CKEditorComponent,
    ...planContenidosComponents
]