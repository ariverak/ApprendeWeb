import { Component } from '@angular/core';

// TODO: move layouts into the framework
@Component({
  selector: 'theme-layout',
  styleUrls: ['./theme.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <theme-header></theme-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
       <!-- <nb-sidebar-header>
          <a href="#" class="btn btn-hero-success main-btn">
            <i class="nb-home"></i> <span>Inicio</span>
          </a>
        </nb-sidebar-header> -->
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer fixed>
        <!--<ngx-footer></ngx-footer>-->
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class ThemeLayoutComponent {
}
