import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
  <theme-layout>
  <router-outlet></router-outlet>
  </theme-layout>
  `
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
