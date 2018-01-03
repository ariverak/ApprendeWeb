import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'HORA DE APPRENDER',
    group: true,
  },
  {
    title: 'Contenidos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Contenidos1',
        link: '/web/contenidos1',
      },
      {
        title: 'Contenidos2',
        link: '/web/contenidos1',
      },
    ],
  },
  {
    title: '...',
    icon: 'nb-gear'
  },
  {
    title: '...',
    icon: 'nb-location'
  },
  {
    title: '...',
    icon: 'nb-bar-chart'
  },
  {
    title: '...',
    icon: 'nb-title'
  },
  {
    title: '...',
    icon: 'nb-tables',
  },
  {
    title: '...',
    icon: 'nb-locked'
  },
];