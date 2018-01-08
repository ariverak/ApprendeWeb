import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'ion ion-android-home',
    link: '/web/home',
    home: true,
  },
  {
    title: 'HORA DE APPRENDER',
    group: true,
  },
  {
    title: 'Planificaciónes',
    icon: 'ion ion-document-text',
    link: '/web/plan-contenidos'
  },
  {
    title: 'Calificaciones',
    icon: 'ion ion-ios-compose-outline'
  },
  {
    title: 'Correcciones',
    icon: 'ion ion-android-checkmark-circle'
  },
  {
    title: 'Mensajeria',
    icon: 'ion ion-android-notifications-none',
    link : '/web/mensajeria'
  }
];