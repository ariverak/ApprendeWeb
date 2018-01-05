import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
  <theme-layout>
  <nb-menu [items]="menu"></nb-menu> 
  <router-outlet></router-outlet>
  </theme-layout>
  `
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
